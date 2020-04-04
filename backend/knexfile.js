// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
      //a pasta database foi colcocada aqui dentro para uma conexão com banco de dados 
    },
    migrations: {
      directory: './src/database/migrations'
      //pastas da migrations, foi criada umas migrations com um comando no terminal
      //acesse knexjs.org para mais informações
    },
    useNullAsDefault: true,
    //um erro aparecerá sem este código
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
