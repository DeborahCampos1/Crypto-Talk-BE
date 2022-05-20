const pgp = require("pg-promise")();
require("dotenv").config();

const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } =
    process.env;

const cn = DATABASE_URL
?{
    connectionString: DATABASE_URL,
    max: 30,
    ssl:{
        rejectUnauthorized: false
    },
 }
:{
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: PG_PASSWORD,
};

const db = pgp(cn);

// db.any("SELECT * FROM users;").then((data)=>console.log(data))
// db.any("SELECT * FROM resources;").then((data)=>console.log(data))
// node ./db/dbConfig.js
module.exports = db;