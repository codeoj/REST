const express = require('express');
const app = express();
const connection = require('./config/connection');
const routes = require('./routes');
const GiftTable = require('./database/GiftTable');

connection.connect((error) => {
   if(error) {
      console.log(error)
   } else {
      console.log("connection success");

      GiftTable.init(connection);
      app.listen(3000, () => console.log('Server started'));
   }
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);
