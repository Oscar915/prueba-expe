if(process.env.NODE_ENV==='development'){
    require('dotenv').config();
}
const express =require('express');
const cors =require('cors');

require("./../src/services/db");
require("dotenv").config();
const app=express();
//configuración 
app.use(express.static(__dirname+ '/public'));
app.set("port",process.env.PORT || 30300);

//midlewares 
app.use(cors());
app.use(express.json());

//Rutas
app.use(require("./routes"));
module.exports =app;