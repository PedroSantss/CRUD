const {conexao} = require('../conexao.js')

async function incluirUsuario(infos){
    const sql = `INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql, infos);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {incluirUsuario}