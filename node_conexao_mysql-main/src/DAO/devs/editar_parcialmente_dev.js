const {conexao} = require('../conexao.js')

async function editarParcialmenteDev(id_dev, campo, valor){
    const data = [valor, id_dev]
    
    const colunasPermitidas = ['id_dev', 'nome', 'especialidade', 'email', 'data_entrada'];
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE devs set ${campo} = ? WHERE id_dev = ?;`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql, data);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {editarParcialmenteDev}