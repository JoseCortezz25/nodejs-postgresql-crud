const express = require('express');
const keys = require('../../config/keys');
const pool = require('../../config/database');
const ruta = express.Router();


ruta.get('/', (req, res)=>{
    pool.query('SELECT * FROM prueba', (error, resultado)=>{  
        console.log(resultado.rows);
        res.render('index', {
            keys,
            resul: resultado
        });
    })
})

module.exports = ruta;