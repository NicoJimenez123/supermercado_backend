const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())

const productoRuta = require('../routes/ProductosRouter')

app.use('/tienda/productos', productoRuta);


module.exports = app;