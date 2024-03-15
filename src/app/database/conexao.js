import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'bdcopa'
})

conexao.connect()

export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, result) => {
            if(error)  return reject(mensagemReject)
            const resultJson = JSON.parse(JSON.stringify(result))
            return resolve (resultJson)
        })
    })
}
 
export default conexao;