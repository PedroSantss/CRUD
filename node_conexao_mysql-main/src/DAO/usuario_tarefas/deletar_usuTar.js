const {conexao} = require('../conexao.js')

async function deletarUsuarioTarefa(id_usuario, id_tarefa){
    
    const sql = `DELETE FROM usuario_tarefas WHERE id_usuario = ? AND id_tarefa = ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[id_usuario, id_tarefa]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {deletarUsuarioTarefa}