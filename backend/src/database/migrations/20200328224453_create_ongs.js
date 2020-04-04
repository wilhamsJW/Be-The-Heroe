
exports.up = function(knex) {
  return  knex.schema.createTable('ongs', function (table){
     table.string('id').primary();//iremos criar uma id para cada ong, será feito com crypton(na pasta routes)
     table.string('name').notNullable(); 
     table.string('email').notNullable(); 
     table.string('whatsapp').notNullable(); 
     table.string('city').notNullable(); 
     table.string('uf', 2).notNullable(); //uf = estado, 2 siginifica duas letras, ex.:SP, SC, RJ, PE..
    })
};

exports.down = function(knex) {
 return knex.schema.dropTable('ongs');
};

/**
 * Método 'up' ou 'exports.up' é responsável pela criação da tabela, o q vai acontecer qndo a tabela for exceutada
 * Método 'down' ou 'exports.down' é reposnável pelo delete de uma tabela ou desfazer uma tabela
 * dropTable = desfazer tabela
 * return tem q ser colocado pra poder atualizar o banco, se não colocar irá retornar a seguinte msg ->
 * migration 20200328224453_create_ongs.js did not return a promise, esta msg diz q não retornou a promessa
 * 
 * Para especificações sobre o knex, acessar o: knexjs.org
 * DICA: use npx knex migrate:latest para atualizar o banco de dados
 * npx knex lista todos os comandos q vc precisar.
 */