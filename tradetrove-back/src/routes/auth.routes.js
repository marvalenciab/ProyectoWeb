import { Router } from 'express';
import { consultarAcciones } from '../controller/Compra.js';
import { estadoAcciones } from '../controller/Estado.js';
import { realizarCompra } from '../controller/RealizarCompra.js';
import { Asesor, Inventario } from '../controller/Servicios.js';
import { Iniciar, Register } from '../controller/Validation.js';

const auth = Router();

auth.post('/Registrar', Register);
auth.get('/iniciar', Iniciar);
auth.get('/asesor', Asesor);
auth.get('/inventario', Inventario);
auth.get('/compraracciones', consultarAcciones);
auth.get('/compraracciones/realizarcompra', realizarCompra);
auth.get('/estado', estadoAcciones);

export default auth;
