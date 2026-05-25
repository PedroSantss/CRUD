const {conexao} = require('../conexao.js')

async function editarIntegralmenteUsuario(infos, id_usuario){

    const sql = `UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE id_usuario = ?;`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[...infos, id_usuario]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {editarIntegralmenteUsuario}