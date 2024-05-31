import jwt from 'jsonwebtoken';
import { TOKEN_SECRECT } from '../config/config.js';
import { pool } from '../database/db.js';

export const realizarCompra = async (req, res) => {
  try {
    const { idAccion, precioCompra } = req.body;
    const token = req.cookies.token; // Suponiendo que el token se almacena en cookies

    if (!token) {
      return res.status(403).json({ message: 'No se proporcionó token' });
    }

    const decoded = jwt.verify(token, TOKEN_SECRECT);
    const idUsuario = decoded.idusuario;

    if (!idUsuario || !idAccion || !precioCompra) {
      return res.status(400).json({ message: 'Error en los datos, hay campos nulos' });
    }

    const [usuario] = await pool.query('SELECT saldo FROM usuarios WHERE idUsuario = ?', [idUsuario]);
    if (usuario.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    if (usuario[0].saldo < precioCompra) {
      return res.status(400).json({ message: 'Saldo insuficiente' });
    }

    const nuevoSaldo = usuario[0].saldo - precioCompra;
    await pool.query('UPDATE usuarios SET saldo = ? WHERE idUsuario = ?', [nuevoSaldo, idUsuario]);

    await pool.query('INSERT INTO compra (idUsuario, idaccion, precioCompra) VALUES (?, ?, ?)', [
      idUsuario,
      idAccion,
      precioCompra,
    ]);

    res.status(200).json({ message: 'Compra realizada exitosamente' });
  } catch (error) {
    return res.status(500).json({
      message: 'Error. Hubo un error en el proceso de la base de datos',
    });
  }
};
