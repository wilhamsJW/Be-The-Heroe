
exports.up = function(knex) {
    return  knex.schema.createTable('incidents', function (table){
        table.increments();

        table.string('title').notNullable(); 
        table.string('description').notNullable(); 
        table.decimal('value').notNullable(); 
      
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs'); 
       })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};


/**
 * Nova tabela criada para os incidents da ong
 * table.increments(); = serve pra criar uma chave primária, cada vez que for criado um novo incidente ele 
 * irá criar um código automático.
 * 
 * table.string('ong_id').notNullable(); = isto foi criado pra saber qual a ong que criou esse incidente
 * isso se chama relacionamento. 
 *  
 * CHAVE ESTRANGEIRA ou PRIMÁRIA: 
 * Toda vez que um id de uma ong querer criar algum incident, ele precisa ser cadastrado na tabela de ong
 * que é esta tabela aqui: table.foreign('ong_id').references(id).inTable('ongs'); 
 * table.foreign('ong_id').references(id).inTable('ongs'); = a coluna ong_id referencia a id na tabela ongs.
 * 
 * Após terminar a migration excute o código no terminal:
 * npx knex migrate:latest, para atualizar.
 *
 * 
 * 
 */