const express = require('express');
const app = express();

app.use(express.json());


// import Router de libros
const librosRouter = require('./routes/libros');

// import middleware Error Handler
const errorHandler = require('./middlewares/errorHandler');

app.use('/libros', librosRouter);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});