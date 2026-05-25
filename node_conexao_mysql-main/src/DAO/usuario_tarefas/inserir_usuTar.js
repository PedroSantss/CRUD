const {conexao} = require('../conexao.js')

async function incluirUsuarioTarefa(infos){
    const sql = `INSERT INTO usuario_tarefas (id_usuario, id_tarefa) VALUES (?, ?)`
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

module.exports = {incluirUsuarioTarefa}