const {conexao} = require('../conexao.js')


async function buscarUsuarios(){
  console.log('DAO de USUÁRIO')
    const sql = `SELECT * FROM usuario;`
    
    const conn = await conexao()
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

async function buscarUsuarioPorCodigo(codigo){
    const sql = `SELECT * FROM usuario WHERE id_usuario = ?`
    
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql, [codigo]);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}


module.exports = {buscarUsuarios, buscarUsuarioPorCodigo}