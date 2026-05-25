const {conexao} = require('../conexao.js')

async function editarParcialmenteUsuario(id_usuario, campo, valor){
    const data = [valor, id_usuario]
    
    const colunasPermitidas = ['nome', 'email', 'senha'];
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE usuario set ${campo} = ? WHERE id_usuario = ?;`
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

module.exports = {editarParcialmenteUsuario}