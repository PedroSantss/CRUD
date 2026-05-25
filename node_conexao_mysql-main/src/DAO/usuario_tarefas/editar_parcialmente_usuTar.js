const {conexao} = require('../conexao.js')

async function editarParcialmenteUsuarioTarefa(id_usuario, id_tarefa, campo, valor){
    const data = [valor, id_usuario, id_tarefa]
    
    const colunasPermitidas = ['id_usuario', 'id_tarefa'];
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE usuario_tarefas set ${campo} = ? WHERE id_usuario = ? AND id_tarefa = ?;`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql, data);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {editarParcialmenteUsuarioTarefa}