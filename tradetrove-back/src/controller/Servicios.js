import { pool } from '../database/db.js';

export const Asesor = async (req, res) => {
  try {
    const { nombre, foto, Telefono, Correo, idPAis, entidad, Descripcion } = req.body;
    const [rows] = await pool.query('SELECT * FROM asesor');

    const asesores = [];

    for (const asesor of rows) {
      asesores.push({
        Nombre: asesor.nombre,
        foto: asesor.foto,
        Telefono: asesor.Telefono,
        Correo: asesor.Correo,
        idPAis: asesor.IdPAis,
        entidad: asesor.entidad,
        Descripcion: asesor.Descripcion,
      });
    }

    console.log(asesores);
    res.send('funciono');
    return res;
  } catch (error) {
    console.error(error);
    return res.status(500).json('Error interno del servidor');
  }
};

export const Inventario = async (req, res) => {
  try {
    const { idCompra, idUsuario, id_accion, precioCompra } = req.body;
    const [compras] = await pool.query('SELECT * FROM compra');

    // Crear un array para almacenar las compras
    const inven = [];
    for (const compra of compras) {
      inven.push({
        idCompra: compra.idCompra,
        idUsuario: compra.idUsuario,
        idaccion: compra.idaccion,
        precioCompra: compra.precioCompra,
      });
    }

    // Verificar si hay compras y obtener los idaccion
    if (compras.length === 0) {
      return res.status(404).json({ error: 'No se encontraron compras' });
    }

    // Inicializar el array para almacenar la información de las acciones
    const acciones = [];

    // Recorrer cada compra y obtener los detalles de la acción asociada
    for (const compra of compras) {
      const [accionDetails] = await pool.query(
        'SELECT acciones.* FROM compra INNER JOIN acciones ON compra.idaccion = acciones.id_accion WHERE compra.idaccion = ?',
        [compra.idaccion]
      );

      // Almacenar los detalles en el array acciones
      if (accionDetails.length > 0) {
        for (const detail of accionDetails) {
          acciones.push(detail);
        }
      }
    }

    console.log(inven[0]);
    console.log('Detalles de las acciones:', acciones);
    res.send('funciono');
    return res;
  } catch (error) {
    console.error(error);
    return res.status(500).json('Error interno del servidor');
  }
};
