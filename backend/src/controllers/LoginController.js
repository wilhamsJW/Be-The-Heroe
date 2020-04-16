//id verification when logging in 

const connection = require("../database/connection");
//connection to the database

module.exports = {
    async create(request, response) {

        const {id} = request.body;
        //o login que eu quero saber pra verificar se existe no banco de dados vai vim através
        //do corpo da minha requisição
        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();
        //first pra não me retornar um array e sim apenas um resultado


        if(!ong) {
            return response.status(400).json({error: 'No ONG Found with this ID '});

           
        }
        
        return response.json(ong);
  }
};