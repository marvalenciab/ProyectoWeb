import { pool } from "../database/db.js"

export const Register =async (req, res) =>{
   const {nombre,pais,saldo,correo, contraseña} =req.body

   const [row] = await pool.query("INSERT INTO usuarios (nombre, pais, saldo, correo, contraseña) VALUES (?,?,?,?,?)", [nombre, pais,saldo,correo,contraseña])




   console.log(row)
    res.send('funciono')
}


export const Iniciar = (req, res)=>{
    res.send('eimy')
}