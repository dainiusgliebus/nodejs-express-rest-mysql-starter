require('dotenv').config();
const mysql = require("mysql2");

const db_write = mysql.createConnection({
    host     : process.env.DB_WRITE_HOST || 'localhost',
    user     : process.env.DB_USERNAME   || 'root',
    password : process.env.DB_PASSWORD   || '',
    database : process.env.DB_DATABASE   || 'test',
    port     : process.env.DB_PORT       || 3306
});

const db_read = mysql.createConnection({
    host     : process.env.DB_READ_HOST || 'localhost',
    user     : process.env.DB_USERNAME  || 'root',
    password : process.env.DB_PASSWORD  || '',
    database : process.env.DB_DATABASE  || 'test',
    port     : process.env.DB_PORT      || 3306
});

db_write.connect(function(err) {
    if (err) throw err;
});

db_read.connect(function(err) {
    if (err) throw err;
});

module.exports = {db_write, db_read};
