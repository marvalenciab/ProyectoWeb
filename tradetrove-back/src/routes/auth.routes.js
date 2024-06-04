import { Router } from 'express';
import { agregarAlCarrito, consultarAcciones } from '../controller/Compra.js';
import { estadoAcciones } from '../controller/Estado.js';
import { Asesor, Inventario } from '../controller/Servicios.js';
import { Iniciar, Register } from '../controller/Validation.js';

const auth = Router();
auth.post('/Registrar', Register);
auth.post('/iniciar', Iniciar);
auth.get('/compraracciones', consultarAcciones);
auth.get('/agregaralcarrito', agregarAlCarrito);
auth.get('/estado', estadoAcciones);
auth.get('/Inventario', Inventario);
auth.get('/asesor', Asesor);
export default auth;
