//tiene los archivos que definen los controladores que manejan las solicitudes de la API


const Producto = [
    {"id": 1, "nombre":"pan integral", "prese": "500g", "precio": "280", "stock":false},
    {"id": 2, "nombre":"harina 000",   "prese": "1kg",  "precio": "120", "stock":true},
  ]

  exports.obtenerProductos = (req, res) => {
    res.status(200).json( Producto )
  } 

  exports.agregarProducto = (req, res) => {
    const body = req.body 
    const ids = Producto.map ( t => t.id )
    const max = Math.max( ...ids) + 1
    Producto.push ( {
      "id": max, 
      "nombre": body.nombre, 
      "prese": body.prese,
      "precio": body.precio,
      "stock":body.stock,
   })
    res.status(201).json(Producto[Producto.length - 1])
} 

exports.borrarProducto = (req, res) => {
    const idProducto = req.params.idProducto
    const prod = Producto.find( t => t.id == idProducto)
    if (undefined != prod) {
       const idx = Producto.indexOf(prod)
       Producto.splice(idx, 1)
       res.status(202).json( {"Mensaje": `El producto ${idProducto} fue elimiado`, "nombre": prod} )
    }
    else
        res.status(404).json( {"Mensaje": `El product ${idProducto} no fue encontrado`} )
  }

  exports.cambiarStock = (req, res) => {
    const idProducto = req.params.idProducto
    const prod = Producto.find( t => t.id == idProducto)
    if (undefined != prod) {
       const idx = Producto.indexOf(prod)
       prod.stock = !prod.stock
       Producto.splice(idx, 1, prod)
       res.status(202).json( {"Mensaje": `El estado de stock del producto ${idProducto} fue modificado`, "nombre": prod} )
    }
    else
        res.status(404).json( {"Mensaje": `El product ${idProducto} no fue encontrado`} )
  }