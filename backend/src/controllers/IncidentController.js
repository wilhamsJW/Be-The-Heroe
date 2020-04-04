//registration of incidents
//deleted incidents

const connection = require('../database/connection');
//connection to the database

module.exports = {
   //método de listagem de todos os casos
    async index(request, response) {

        const { page = 1 } = request.query;
         //sistema de paginação, referençias abaixo.
        //query se usa com -> '?'(interrogação)no endereço ex.: http:localhost/users?page=3


        const [count] = await connection('incidents').count();

        //console.log(count);(apenas pra ver no terminal)
        //count = contagem/ irá contar quantos incidents tem pra rertornar uma resposta ao 
        //front end.


        const incidents = await connection('incidents')

        //join -> relaciona dados de 2 tabelas
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')//sinal de igualdade apenas pra 
        //comparação epra trazer ambos os dados das tabelas// sem ele funciona tbm
        .limit(5)
        .offset((page - 1 ) * 5)
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);
        //coloquei um array dentro do select, array é reprensentado por colchetes,dessa forma seleciono os itens
        //sem esse array ele mistura o id dos icnidents criados com a id da ong, prq ambos tem o mesmo nome 'id'
        //estou selecionando todos com * mas os da ong eu quero esses aí

        response.header('x-total-count', count['count(*)']);
        //irá mostrar no header do insomnia a contagem dos incidents ou casos
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

 //sistema de paginação/ para que na hora da requisição de listagens dos incidents
 //vá mostrando de 5 em 5, ou seja deve mostrar 5 inicents por página web
 //Below code:
 /**
  *const { page = 1 } = request.query;
  *.limit(5)
  *.offset((page - 1 ) * 5)
    com o offset ele irá pular de 5 em 5, na 1° page ele irá contar do 0, sabemos disso prq
    coloquei o -1 dentro do offset, então ele calcula: -1 = 0 e irá começar do 1 até o 5     
  


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