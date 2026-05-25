const {conexao} = require('../conexao.js')

async function deletarDev(id_dev){
    
    const sql = `DELETE FROM devs WHERE id_dev = ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[id_dev]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {deletarDev}