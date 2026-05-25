const {conexao} = require('../conexao.js')

async function incluirDev(infos){
    const sql = `INSERT INTO devs (nome, especialidade, email, data_entrada) VALUES (?, ?, ?, ?)`
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

module.exports = {incluirDev}