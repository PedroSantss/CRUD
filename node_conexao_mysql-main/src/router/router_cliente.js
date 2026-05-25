const express = require('express')

const router = express.Router()

// IMPORTANDO OS DAOS
const {
    buscarClientes,
    buscarCliente
} = require('../DAO/cliente/buscar_cliente')

const {
    incluirCliente
} = require('../DAO/cliente/inserir_cliente')

const {
    deletarCliente
} = require('../DAO/cliente/deletar_cliente')

const {
    editarParcialmenteCliente
} = require('../DAO/cliente/editar_parcialmente_cliente')

const {
    editarIntegralmenteCliente
} = require('../DAO/cliente/editar_integralmente_cliente')


// =========================================
// GET TODOS OS CLIENTES
// =========================================

router.get('/firma/1.0.0/clientes', async (req, res) => {

    try {

        const clientes = await buscarClientes()

        res.status(200).json(clientes)

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        })
    }
})


// =========================================
// GET CLIENTE POR CODIGO
// =========================================

router.get('/firma/1.0.0/cliente/:codigo', async (req, res) => {

    try {

        const codigo = parseInt(req.params.codigo)

        const cliente = await buscarCliente(codigo)

        res.status(200).json(cliente)

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        })
    }
})


// =========================================
// POST CLIENTE
// =========================================

router.post('/firma/1.0.0/cliente', async (req, res) => {

    try {

        const {
            codigo,
            nome,
            limite,
            telefone,
            id_endereco,
            id_status
        } = req.body

        const infos = [
            codigo,
            nome,
            telefone,
            limite,
            id_endereco,
            id_status
        ]

        const result = await incluirCliente(infos)

        res.status(201).json(result)

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        })
    }
})


// =========================================
// PUT CLIENTE
// =========================================

router.put('/firma/1.0.0/cliente', async (req, res) => {

    try {

        const {
            codigo,
            nome,
            limite,
            telefone,
            id_endereco,
            id_status
        } = req.body

        const infos = [
            telefone,
            nome,
            limite,
            id_endereco,
            id_status
        ]

        const result =
            await editarIntegralmenteCliente(infos, codigo)

        res.status(200).json(result)

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        })
    }
})


// =========================================
// PATCH CLIENTE
// =========================================

router.patch('/firma/1.0.0/cliente', async (req, res) => {

    try {

        const {
            codigo,
            campo,
            valor
        } = req.body

        // VALIDACAO IMPORTANTE
        const camposPermitidos = [
            'nome',
            'telefone',
            'limite',
            'id_endereco',
            'id_status'
        ]

        if (!camposPermitidos.includes(campo)) {

            return res.status(400).json({
                erro: 'Campo inválido'
            })
        }

        const result =
            await editarParcialmenteCliente(
                codigo,
                campo,
                valor
            )

        res.status(200).json(result)

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        })
    }
})


// =========================================
// DELETE CLIENTE
// =========================================

router.delete('/firma/1.0.0/cliente', async (req, res) => {

    try {

        const { codigo } = req.body

        const result = await deletarCliente(codigo)

        res.status(200).json(result)

    } catch (erro) {

        res.status(500).json({
            erro: erro.message
        })
    }
})


// EXPORTANDO ROUTER
module.exports = router