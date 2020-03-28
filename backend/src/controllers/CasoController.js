const connection = require('../database/connection')

module.exports = {
    async indexCaso(request,response){
        const {page = 1}= request.query
       
        const [count] = await connection('casos').count()
        const result = await connection('casos')
        .join('ongs','ongs.id','=',"casos.ong_id")
        .limit(5)
        .offset((page - 1) * 5)
        .select(['casos.*','ongs.nome','ongs.cidade','ongs.whatsapp','ongs.email','ongs.UF'])
       
        response.header('X-Total-Count', count['count(*)'])
        return response.json(result)
    },
    async createCaso(request,response){
        const {titulo, descricao, valor }  = request.body
        const ong_id = request.headers.autorizacao

        const [id] = await connection('casos').insert({
            titulo,
            descricao,
            valor,
            ong_id
        })
        return response.json({id})
    },
    async deleteCaso(request,response){
        const {id} = request.params
        const ong_id = request.headers.autorizacao
        const caso = await connection('casos').where('id', id).select('ong_id').first()
        
        if(caso.ong_id != ong_id){
            return response.status(401).json({error:'Usuário não autorizado'})
        }

        await connection('casos').where('id',id).delete();
        return response.status(204).send()

    }
}