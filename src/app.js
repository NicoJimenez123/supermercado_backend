const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())

const productoRuta = require('../routes/ProductosRouter')

app.use('/tienda/productos', productoRuta);

const puerto = process.env.port || 3000
app.listen(puerto, () => {
  console.log("Servidor corriendo en el puerto: " + puerto)
})