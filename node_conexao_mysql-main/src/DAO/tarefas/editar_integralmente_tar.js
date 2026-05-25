const {conexao} = require('../conexao.js')

async function editarIntegralmenteTarefa(infos, id_tarefa){

    const sql = `UPDATE tarefas SET titulo = ?, descricao = ?, status = ?, prioridade = ?, data_entrega = ? WHERE id_tarefa = ?;`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[...infos, id_tarefa]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {editarIntegralmenteTarefa}