const Producto = require('../models/productoModel');

exports.crearProducto = async(req, res) => {
  try {

    let producto;

    producto = new Producto(req.body);

    await producto.save();
    res.send(producto);
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Error')
  }
}

exports.obtenerProductos = async (req, res) => {
  try {
    
    const productos = await Producto.find();
    res.json(productos);

  } catch (error) {
    console.error(error);
    res.status(500).send('Error')
  }
}

exports.actualizarProducto = async (req, res) => {
  try {
    const {nombre, categoria, cantidad, precio} = req.body;
    let producto = await Producto.findById(req.params.id);

    if (!producto) {
      res.status(404).json({message: 'Producto no existe'});
    }
    producto.nombre = nombre;
    producto.categoria = categoria;
    producto.cantidad = cantidad;
    producto.precio = precio;

    producto = await Producto.findOneAndUpdate({ _id: req.params.id}, producto, {new: true});
    res.json(producto);

  } catch (error) {
    console.log(error);
    res.status(500).send('Error');
  }
}

exports.obtenerProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);

    if (!producto) {
      res.status(404).json({message: 'Producto no existe'});
    }
    res.json(producto);

  } catch (error) {
    console.log(error);
    res.status(500).send('Error');
  }
}

exports.eliminarProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);

    if (!producto) {
      res.status(404).json({message: 'Producto no existe'});
    }
    await Producto.findOneAndDelete({ _id: req.params.id })
    res.json({message: 'Producto eliminado'});

  } catch (error) {
    console.log(error);
    res.status(500).send('Error');
  }
}