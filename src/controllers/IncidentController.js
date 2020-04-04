//registration of incidents
//deleted incidents

const connection = require('../database/connection');
//connection to the database

module.exports = {

    //método de listagem
    async index(request, response) {
        const incidents = await connection('incidents').select('*');

        return response.json(incidents);

    },

    //método de criação
    async create(request, response) {
        const {title, description, value} = request.body;
        //requisitos para cadastrar uma ong do cliente

        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })
        return response.json({ id });
    },

    //método de delete
    async delete(request, response) {
        const  {id}  = request.params;
        const ong_id = request.headers.authorization;
        //pegando id da ong

        const incidents = await  connection('incidents')

        .where('id', id)
        //where prq quero pegar algo específico 

        .select('ong_id')
        .first();

        if (incidents.ong_id === ong_id) {
            return response.status(401).json({ error: 'Operation Not  Permitede'});

        }
         
        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};





/*
const ong_id = request.headers.authorization;
pegando o id da ong logada, com esta linha de código ele irá trazer o id da ong 
que quer deletar o incident, porém tenho q verifcar se a id que quer apagar um
incident é a mesma id do incident a ser apagado, pq uma ong não pode deletar o 
incident de outra ong          
  
requeste.headers acessa o cabeçalho da requisição, ele guarda informações sobre
dados do usuários, dados sobre o idiomaa id das ongs.
LEMBRETE: ir no isominia e criar uma pasta do tipo post via json, ir no headers do
isominia e colocar o nome Authorization(pode ser qq nome) e uma id no value.
request.headers.authorization; este é o nome q tá la no insominia, o authorization
await quer dizer q meu código só será finalizado qndo prencher os campos
*/