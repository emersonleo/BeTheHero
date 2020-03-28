const connection = require('../database/connection')

module.exports = {
    async login(request,response){
        const {id} = request.body
        const ong = await connection('ongs').where('id',id).select('*').first()

        if(!ong){
            return response.status(400).json({error:"Nenhuma ong foi encontrada para esse id"})
        }
        return response.json(ong)
    }



}