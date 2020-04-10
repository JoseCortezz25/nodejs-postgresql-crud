const express = require('express');
const keys = require('../../config/keys');
const pool = require('../../config/database');
const colors =require('colors');
const ruta = express.Router();


ruta.get('/', async (req, res)=>{
    await pool.query('SELECT * FROM prueba', (error, resultado)=>{  
        // console.log(resultado.rows);
        res.render('index', {
            keys,
            resul: resultado.rows
        });
    });
});

ruta.post('/', async (req, res)=>{
    const {nombre} = req.body;
    await pool.query(`INSERT INTO prueba(name) VALUES ('${nombre}')`, (error, resultado)=>{
        res.redirect(301, '/')
    });
});


ruta.get('/delete/:id', async (req, res)=>{
    const id_prueba = req.params.id;
    await pool.query(`DELETE FROM prueba WHERE id_prueba = '${id_prueba}'`, (error, respuesta)=>{
        res.redirect(301, '/')
    });
    // await pool.query(`DELETE FROM prueba WHERE id_prueba = '${id_prueba}'`)
    // .then(resultado => error())
    // .catch(console.log(error))
});

ruta.get('/update/:id', async (req, res)=>{
    const {id} = req.params;
    const consulta = await pool.query(`SELECT * FROM prueba WHERE id_prueba = '${id}'`);
    res.render('update', {keys, id, query: consulta.rows[0]});
});

ruta.post('/update/:id', async (req,res)=>{
    const {id} = req.params;
    const {nombre} = req.body;
    await pool.query(`UPDATE prueba SET name = '${nombre}' WHERE id_prueba = '${id}'`);
    res.redirect('/');
});

module.exports = ruta;