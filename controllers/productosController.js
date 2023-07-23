const db = require('../db');

// Controlador para obtener todos los productos
const obtenerProductos = (req, res) => {
  db.query("SELECT * FROM productos", (error, resultados) => {
    if (error) {
      res.status(500).json({ error: "Error al obtener los productos" });
    } else {
      res.json(resultados);
    }
  });
};

// Controlador para obtener un producto por su ID
const obtenerProductoPorId = (req, res) => {
  const id = req.params.id;

  db.query(
    "SELECT * FROM productos WHERE id_producto = ?",
    [id],
    (error, resultados) => {
      if (error) {
        res.status(500).json({ error: "Error al obtener el producto" });
      } else if (resultados.length === 0) {
        res.status(404).json({ error: "Producto no encontrado" });
      } else {
        res.json(resultados[0]);
      }
    }
  );
};

// Controlador para crear un nuevo producto
const crearProducto = (req, res) => {
  const { nombre, descripcion, precio, imagen } = req.body;

  db.query(
    "INSERT INTO productos (nombre, descripcion, precio, imagen) VALUES (?, ?, ?, ?)",
    [nombre, descripcion, precio, imagen],
    (error, resultados) => {
      if (error) {
        res.status(500).json({ error: "Error al crear el producto" });
      } else {
        res.json({ mensaje: "Producto creado exitosamente" });
      }
    }
  );
};

// Controlador para actualizar un producto existente
//Cuando tengas un problema, reinicia, muchas veces eso es la solución.
//Revisa que la url sea correcta, esto podría ser el inconveniente.
const actualizarProducto = (req, res) => {
  const  id  = req.params.id;
  const { nombre, descripcion, precio, imagen } = req.body;

  db.query( 
    "UPDATE productos SET nombre = ?, descripcion = ?, precio = ?,imagen = ? WHERE id_producto = ?",
    [nombre, descripcion, precio, imagen, id],
    (error, resultados) => {
      if (error) {
        res.status(500).json({ error: "Error al actualizar el producto" });
        console.log(error)
      } else if (resultados.affectedRows === 0) {
        res.status(404).json({ error: "Producto no encontrado" });
      } else {
        res.json({ mensaje: "Producto actualizado exitosamente" });
      }
    }
  );
};

// Alternativa de actualizacion
// const actualizarProducto2 = (req, res) => {
//   const { id } = req.params;
//   const { nombre, descripcion, precio, imagen } = req.body;

//   const updateQuery = `
//     UPDATE productos
//     SET nombre = ?, descripcion = ?, precio = ?, imagen = ?
//     WHERE id_producto = ?
//   `;

//   db.query(updateQuery, [nombre, descripcion, precio, imagen, id], (err, result) => {
//     if (err) {
//       console.error('Error al actualizar el producto:', err);
//       res.status(500).json({ error: 'Error al actualizar el producto' });
//       return;
//     }

//     res.json({ message: 'Producto actualizado correctamente' });
//   });
// };



// Controlador para eliminar un producto
const eliminarProducto = (req, res) => {
  const id = req.params.id;

  db.query(
    "DELETE FROM productos WHERE id_producto = ?",
    [id],
    (error, resultados) => {
      if (error) {
        res.status(500).json({ error: "Error al eliminar el producto" });
      } else if (resultados.affectedRows === 0) {
        res.status(404).json({ error: "Producto no encontrado" });
      } else {
        res.json({ mensaje: "Producto eliminado exitosamente" });
      }
    }
  );
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
