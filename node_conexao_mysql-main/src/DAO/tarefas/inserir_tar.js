const {conexao} = require('../conexao.js')

async function incluirTarefa(infos){
    const sql = `INSERT INTO tarefas (titulo, descricao, status, prioridade, data_entrega) VALUES (?, ?, ?, ?, ?)`
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

module.exports = {incluirTarefa}