const {conexao} = require('../conexao.js')

async function deletarTarefa(id_tarefa){
    
    const sql = `DELETE FROM tarefas WHERE id_tarefa = ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[id_tarefa]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {deletarTarefa}