import { consulta } from "../database/conexao.js"
 
class SelecaoRepository {
    
    // CRUD
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
        return consulta(sql, selecao, 'Não foi possivel Cadastrar')
    }

    findAll() { 
        const sql = "SELECT * FROM selecoes;"
        return consulta(sql, 'Não foi possivel Acessar')
    }

    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return consulta(sql, id, 'Não foi possivel Encontrar')
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return consulta(sql, [selecao, id], 'Não foi possivel Editar')
    }

    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return consulta(sql, id, 'Não foi possivel Deletar')
    }
}

 export default new SelecaoRepository()