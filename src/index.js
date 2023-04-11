const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send("Hola Mundo desde Express")
})

app.listen(3000, () => console.log("Andando en el puerto 3000"))