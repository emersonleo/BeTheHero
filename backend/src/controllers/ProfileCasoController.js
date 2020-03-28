const connection = require('../database/connection')
module.exports = {
    async indexEspecifico(request,response){
        const ong_id = request.headers.autorizacao
        const result = await connection('casos').where("ong_id",ong_id).select('*')
        return response.json(result)
    }
}