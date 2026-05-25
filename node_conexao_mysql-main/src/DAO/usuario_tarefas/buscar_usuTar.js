const {conexao} = require('../conexao.js')


async function buscarUsuariosTarefas(){
  console.log('DAO de USUARIO_TAREFA')
    const sql = `SELECT * FROM usuario_tarefas;`
    
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

async function buscarUsuarioTarefa(id_usuario, id_tarefa){
    const sql = `SELECT * FROM usuario_tarefas WHERE id_usuario = ? AND id_tarefa = ?`
    
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql, [id_usuario, id_tarefa]);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}


module.exports = {buscarUsuariosTarefas, buscarUsuarioTarefa}