//registration of incidents

const connection = require('../database/connection');
//connection to the database

module.exports = {
    async create(request, reponse){
        const {title, description, value} = request.body;
        request.headers;
        //requeste.headers acessa o cabeçalho da requisição, ele guarda informações sobre
        //dados do usuários, dados sobre o idiomaa id das ongs
    }
};
