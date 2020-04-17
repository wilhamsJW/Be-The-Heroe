/**
 * Create id
 * Create ongs
 * Storage of registered ongs
 * 
 */

const crypto = require("crypto");
//crypto é um pacote q vem junto com o node, nessa var eu importei ele
//com um método dele consigo gerar um texto aleatório ou uma string aleatória
//método usado -> randomBytes
//random = aleatório
//ele vai ser usado pra criar uma id pra cada ong que acessar o site

const connection = require("../database/connection");
//importação da pasta connection para comunicação com o banco de dados
//agora pode ser feito as operações com o banco de dados

module.exports = {

    async index(request, response) {
        const ongs = await connection("ongs").select("*");
        //connection na tabela ongs, selecione todos os registros q tem na tabela ongs
        // o asterisco quer dizer isso
        //esta variável foi criada para guardar as ongs cadastradas
      
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsApp, cidade, uf } = request.body;
        //request.body quer dizer que esses dados vem do corpo do meu site
        //esta variável irá receber os dados da requiçâo geita pelo o usuário
        //o código só até o banco de dados prq esta linha é reposnsável por receber 
        //as atualizações enviadas do site para o backend ou pra seerem armazanadas no banco de dados
        
        
       //console.log(data); //apenas pra visualizção no terminal
      
        const id = crypto.randomBytes(4).toString("HEX");
        //número 4 siginifica q ele vai gerar 4 numéros aleatórios para formar
        //a id de cada ong.
      
        //requisição ao banco de dados pra inserir os itens dentro da função
        

        //esta funçâo insere os dados recebido pela var do tipo const lá em cima, a var recebe
        //através do requeste.body os dados enviados pelo usuário, e essa funçÂo insere no
        // banco de dados, através da var conection, da pasta conection
        await connection("ongs").insert({
          id, 
          name,
          email,
          whatsApp,
          cidade,
          uf
        });
        


        return response.json({ id });

        //reposta ao usuário, coloque a reposta dentro do parãmetro com {}
        //a reposta será uma id ao usuário, essa id servirá de cadastro para a ong se cadastrar
        //como que fosse um cpf da ong
        
            }
        };
         /**
   * Especificações sobre: await connection('ongs').insert({
   *   aqui dentro fica todas as colunas q eu quero inserir ali dentro
   * ex.: id, email, nome, whatsap, city, uf..
   *
   * });
   *
   * await = só pode ser usado se a função for assícrona(async),
   * quando o node chegar no código com o await ele irá aguardar, que é justamente
   * a tradução dessa palavra (await = aguardar) então ele só continuára depois q finalizar
   * o código.
   *
   * Utilizamos a var connection e passamos o parametro dela de 'ongs' q é a tabela q e
   * eu quero inserir dados, utilizamos o método insert para inserir dados ali dentro
   *
   */


/**
   * Erro ao retornar reposta ao usuário, a reposta que seria a id do cliente
   * quando a resposta não for criada mas mesmo assim aparace a inserção dos meus dados
   * no terminal e parecer um erro dizendo: no such table ongs, quer dizer q ele não a tabela ongs
   * execute as migrations novamente com:
   * 1° Delete o banco inteiro pasta: db.sqlite,
   * 2° Excute as migrations com: npx knex migrate:latest 
   * 3° Excute: npm start para reinicilaizar o servidor node
   * 4º Vá no insominia e faça o teste
   * 
   * 
   * O ERRO EM QUESTÃO É ESSE:
   * NOTE Q FOI INSERIDOS OS DADOS, SÓ NÃO ACHOU A TABELA
   * (node:11720) UnhandledPromiseRejectionWarning: Error: insert into `ongs` (`city`, `email`, `id`, `name`, `uf`, 
`whatsapp`) values ('Recife', 'apada@apad.com', '5b9dc30d', 'APAD', 'PE', '8354346646') - SQLITE_ERROR: no such table: ongs
(node:11720) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with 
   */