const {conexao} = require('../conexao.js')


async function buscarTarefas(){
  console.log('DAO de TAREFAS')
    const sql = `SELECT * FROM tarefas;`
    
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

async function buscarTarefa(id_tarefa){
    const sql = `SELECT * FROM tarefas WHERE id_tarefa = ?`
    
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql, [id_tarefa]);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}


module.exports = {buscarTarefas, buscarTarefa}