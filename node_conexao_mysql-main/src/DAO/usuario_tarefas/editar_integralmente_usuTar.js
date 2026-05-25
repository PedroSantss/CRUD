const {conexao} = require('../conexao.js')

async function editarIntegralmenteUsuarioTarefa(infos, id_usuario, id_tarefa){

    const sql = `UPDATE usuario_tarefas SET id_usuario = ?, id_tarefa = ? WHERE id_usuario = ? AND id_tarefa = ?;`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[...infos, id_usuario, id_tarefa]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {editarIntegralmenteUsuarioTarefa}