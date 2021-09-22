const mySql = require('mysql2');

const connection = mySql.createConnection({
   host: 'localhost',
   port: 3306,
   user: 'root',
   password: '7091',
   database: 'gift-list'
})

module.exports = connection;