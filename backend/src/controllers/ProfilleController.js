//responsável pelo perfil de uma ong

const connection = require('../database/connection');
//connection to the database

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;
        // acessando os id das ongs logadas

    const incidents = await connection('incidents')
    .where('ong_id', ong_id)// se tirar essa linha tbm funciona
    .select('*');  
    //buscando todos os incidents no banco de dados que a ong criou, a ong em questão 
    //é q que o request.headers me trazer
    
    return response.json(incidents);
    
 }
};
