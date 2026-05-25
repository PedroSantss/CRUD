const {conexao} = require('../conexao.js')

async function editarIntegralmenteDev(infos, id_dev){

    const sql = `UPDATE devs SET nome = ?, especialidade = ?, email = ?, data_entrada = ? WHERE id_dev = ?;`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[...infos, id_dev]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {editarIntegralmenteDev}