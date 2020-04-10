const app = require('./src/config/server');




// Rutas
app.use(require('./src/app/routes/pages'));




// Iniciando el server
app.listen(app.get('port'), function(){
    console.log(`El server funciona de maravilla en el puesto 3000`);
})


