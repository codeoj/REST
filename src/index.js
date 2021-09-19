const express = require('express');
const app = express();
const routes = require('./routes');
const connection = require('./model/connection');

connection.connect((error) => {
   if(error) {
      console.log(error)
   } else {
      console.log("connection success");
      app.listen(3000, () => console.log('Server started'));
   }
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);
