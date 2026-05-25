const {conexao} = require('../conexao.js')

async function editarParcialmenteTarefa(id_tarefa, campo, valor){
    const data = [valor, id_tarefa]
    
    const colunasPermitidas = ['titulo', 'descricao', 'status', 'prioridade', 'data_entrega'];
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE tarefas set ${campo} = ? WHERE id_tarefa = ?;`
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

module.exports = {editarParcialmenteTarefa}