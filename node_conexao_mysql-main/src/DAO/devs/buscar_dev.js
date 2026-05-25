const {conexao} = require('../conexao.js')


async function buscarDevs(){
  console.log('DAO de DEVS')
    const sql = `SELECT * FROM devs;`
    
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

async function buscarDev(codigo){
    const sql = `SELECT * FROM devs WHERE id_dev = ?`
    
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql, [codigo]);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}


module.exports = {buscarDev, buscarDevs}