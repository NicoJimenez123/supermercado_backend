const express = require('express')

import { Router } from 'express'
import res from 'express/lib/response'

const app = express()

app.get('/', (req, res) => {
  res.send("Hola Mundo")
})

app.listen(3000, () => console.log("Andando en el puerto 3000"))