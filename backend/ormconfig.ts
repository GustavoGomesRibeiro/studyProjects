require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? ".env.test" : ".env"
});

module.exports = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect : process.env.DB_DIALECT || "postgres",
    storage: "./__test__/database.sqlite",
    logging: true,
    entities: [
       "src/app/models/*.ts"
    ],
    migrations: [
       "src/database/migrations/*.ts"
    ],
    cli: {
       migrationsDir: "src/database/migrations"
    }
}