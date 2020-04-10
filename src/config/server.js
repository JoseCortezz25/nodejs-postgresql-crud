// Almacenar toda la conexion con express
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan')
//as

// Instanciando Express
// Inicializando
const app = express();



// ------------------------ Configuraciones ------------------------
// app.set(app.get('port'), process.env.PORT || 3000);
// process.env.PORT si existe un puerto en el sistema
app.set('port', process.env.PORT || 3000);

// Template engine
// Declarando que template engine usaremos
app.set('view engine', 'pug');


// ------------------------ Middlewares ------------------------
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())


// ------------------------ Public ------------------------
// Declarando en donde estaran las vistas
app.set('views', path.join(__dirname, '../app/views'));
// Declarando en donde estaran los archivos estaticos
app.use(express.static(path.join(__dirname, '../app/views')))
// path.join = Unir directorios
 

module.exports = app;
