const {conexao} = require('../conexao.js')

async function deletarUsuario(id_usuario){
    
    const sql = `DELETE FROM usuario WHERE id_usuario = ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[id_usuario]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {deletarUsuario}