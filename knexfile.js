module.exports = {
  sqlite3: {
    client: "sqlite3",
    connection: {
      filename: "./data/budget.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  // update the following configuration to use PostgreSQL
  production: {
    client: "pg",
    connection: {
      host: "localhost", // if the server is not running on your computer provide the network address
      database: "the name of the database to use in the postgres server", // <-- update
      user: "a user that has access to the server and database", // <-- update
      password: "the password for the user", // <-- update
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  elephant: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST, // if the server is not running on your computer provide the network address
      database: process.env.DB_DBNAME, // <-- update
      user: process.env.DB_USER, // <-- update
      password: process.env.DB_PASS, // <-- update
    },
    pool: {
      min: 2,
      max: 4,
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  development: {
    client: "pg",
    connection: {
      host: "drona.db.elephantsql.com", // if the server is not running on your computer provide the network address
      database: "qtnhcjsd", // <-- update
      user: "qtnhcjsd", // <-- update
      password: "OdAwhyKHdncAIn2LPfFWOj_vfp5fjFKz", // <-- update
    },
    pool: {
      min: 2,
      max: 4,
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },


};
