var express = require('express');
var server = express();
var routes = require('./routes/routes');

var mongoose = require('mongoose');
const cors = require('cors');


async function connectToDatabase() {
    try {
      await mongoose.connect("mongodb://localhost:27017/DB1", {useNewUrlParser: true, useUnifiedTopology: true});
      console.log('Connexion réussie à la base de données');
    } catch (err) {
      console.error('Erreur de connexion à la base de données :', err);
    }
  }
  
connectToDatabase();
  

server.use(cors(
  // origin: "http://localhost:8000",
  // methods: ["GET", ]
));

server.use(express.json());
server.use(routes);


server.listen(8000, function check(error)
{
    if(error)
    {
        console.log("error");
    } else
    {
        console.log('started');
    }
});

