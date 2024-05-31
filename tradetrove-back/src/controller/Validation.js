import { pool } from "../database/db.js";
import { CrearToken } from "../libs/jwt.js";
export const Register = async (req, res) => {
  try {
    const { nombre, pais, correo, contraseña } = req.body;

    let sueldo = 0.0;
    const [validar] = await pool.query(
      `select correo from usuarios where correo = '${correo}'`
    );

    if (validar.length > 1) {
      return res
        .status(409)
        .json({ message: "El correo ya existe en la base de datos" });
    }

    if (!nombre || !pais || !correo || !contraseña) {
      return res
        .status(400)
        .json({ message: "Error en los datos hay campos nulos" });
    }

    const [row] = await pool.query(
      "INSERT INTO usuarios (nombre, pais, saldo, correo, contraseña) VALUES (?,?,?,?,?)",
      [nombre, pais, sueldo, correo, contraseña]
    );

    const token = await CrearToken({ idusuario: row.insertId });
    res.cookie("token", token);

    //    console.log(row)
    res.status(200).json({ message: "El usuario ingreso correctamente" });
  } catch (error) {
    return res.status(500).json({
      message: "Error. Hubo un error en el proceso de la base de datos",
    });
  }
};

export const Iniciar = async (req, res) => {
  try {
    const { nombre, correo, contraseña } = req.body;

    if (!nombre || !correo || !contraseña) {
      return res
        .status(400)
        .json({ message: "Error en los datos hay campos nulos" });
    }

    const [validar] = await pool.query(
      `select correo from usuarios where correo = '${correo}'`
    );

    if (validar.length === 0) {
      return res.status(404).json({ message: "Error este correo no existe" });
    }

    const [iniciar] = await pool.query(
      `select idUsuario from usuarios where nombre = '${nombre}' and correo ='${correo}' and contraseña = '${contraseña}'`
    );

    if (iniciar.length >= 2) {
      return res
        .status(404)
        .json({
          message:
            "Error hubo un problema en los datos parece que se hay una confincion",
        });
    }
    console.log(iniciar)

    const [idUsuario] = iniciar
    console.log(idUsuario)

    // const 
    const token = await CrearToken({ idusuario:idUsuario.idUsuario });
    res.cookie("token", token);
    console.log(token)
    res
      .status(200)
      .json({ message: "El usuario ha iniciado seccion faborablemente" });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Error. Hubo un error en el proceso de la base de datos",
      });
  }
};
