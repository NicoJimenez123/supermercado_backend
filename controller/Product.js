//tiene los archivos que definen los controladores que manejan las solicitudes de la API


const Producto = require('../models/Productos');

  exports.obtenerProductos = (req, res, next) => {
    Producto.find().then(
      (productos) => {
        res.status(200).json(productos);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }

  exports.agregarProducto = (req, res, next) => {
    const productos = new Producto({
      nombre: req.body.nombre,
      prese: req.body.prese,
      precio: req.body.precio,
      stock: req.body.stock
    });
    productos.save()
      .then(() => {
        res.status(201).json({
          message: 'producto guardado!',
        });
      })
      .catch((error) => {
        res.status(400).json({
          error: error
        });
      });
  };

  exports.borrarProducto = (req, res, next) => {
    Producto.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Borrada!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.cambiarStock = (req, res, next) => {
    const { nombre, prese, precio, stock } = req.body;

    const productos = {
      nombre,
      prese,
      precio,
      stock
    };
    Producto.updateOne({_id: req.params.id}, productos).then(
      () => {
        res.status(201).json({
          message: 'Stock Actualizado'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };


      
/*

const Producto = [
  { "id": 1, "nombre": "pan integral", "prese": "500g", "precio": "280", "stock": false },
  { "id": 2, "nombre": "harina 000", "prese": "1kg", "precio": "120", "stock": true },
]

exports.obtenerProductos = (req, res) => {
  res.status(200).json(Producto)
}

exports.agregarProducto = (req, res) => {
  const body = req.body
  const ids = Producto.map(t => t.id)
  const max = Math.max(...ids) + 1
  Producto.push({
    "id": max,
    "nombre": body.nombre,
    "prese": body.prese,
    "precio": body.precio,
    "stock": body.stock,
  })
  res.status(201).json(Producto[Producto.length - 1])
}

exports.borrarProducto = (req, res) => {
  //Recibo el ID de un producto
  const idProducto = req.params.idProducto
  // Busco un producto con esa ID
  const prod = Producto.find(t => t.id == idProducto)
  // Pregunto si existe un producto
  if (undefined != prod) {
    // Obtengo la posición en la que se encuentra dicho 
    const idx = Producto.indexOf(prod)
    // Elimino el producto de la lista
    Producto.splice(idx, 1)
    // Devuelvo que el producto se eliminó
    res.status(202).json({ "Mensaje": `El producto ${idProducto} fue elimiado`, "nombre": prod })
  }  else {
    // En caso de que no se haya encontrado un producto, devuelvo error
    res.status(404).json({ "Mensaje": `El product ${idProducto} no fue encontrado` })
  }
}

exports.cambiarStock = (req, res) => {
  const idProducto = req.params.idProducto
  const prod = Producto.find(t => t.id == idProducto)
  if (undefined != prod) {
    const idx = Producto.indexOf(prod)
    prod.stock = !prod.stock
    Producto.splice(idx, 1, prod)
    res.status(202).json({ "Mensaje": `El estado de stock del producto ${idProducto} fue modificado`, "nombre": prod })
  }
  else
    res.status(404).json({ "Mensaje": `El product ${idProducto} no fue encontrado` })
}
*/