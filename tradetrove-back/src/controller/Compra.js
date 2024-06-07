import { pool } from '../database/db.js';

// Controlador para consultar las acciones disponibles
export const consultarAcciones = async (req, res) => {
  try {
    const [acciones] = await pool.query('SELECT id_accion, valor_accion, nombre, ruta_imagen FROM acciones');
    if (acciones.length === 0) {
      return res.status(404).json({ message: 'No hay acciones disponibles' });
    }
    res.status(200).json(acciones);
  } catch (error) {
    return res.status(500).json({
      message: 'Error. Hubo un error en el proceso de la base de datos',
    });
  }
};

// Controlador para agregar al carrito
export const agregarAlCarrito = async (req, res) => {
  try {
    const { idUsuario, idAccion, precio } = req.body;
    console.log('Datos recibidos en agregarAlCarrito:', { idUsuario, idAccion, precio });

    const result = await pool.query('INSERT INTO compra (idUsuario, idAccion, precioCompra) VALUES (?, ?, ?)', [
      idUsuario,
      idAccion,
      precio,
    ]);

    console.log('Resultado de la inserción:', result);
    res.status(200).json({ message: 'Añadido al carrito exitosamente' });
  } catch (error) {
    console.error('Error en agregarAlCarrito:', error);
    return res.status(500).json({
      message: 'Error al procesar la solicitud',
    });
  }
};
