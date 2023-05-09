const express = require('express');
const app = express();
app.use(express.json());

const productoRuta = require('../routes/ProductosRouter')

app.use('/tienda/productos', productoRuta);


module.exports = app;