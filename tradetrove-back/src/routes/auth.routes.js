import { Router } from 'express';
import { consultarAcciones } from '../controller/Compra.js';
import { Asesor, Inventario } from '../controller/Servicios.js';
import { Iniciar, Register } from '../controller/Validation.js';

const auth = Router();

auth.post('/Registrar', Register);
auth.get('/iniciar', Iniciar);
auth.get('/asesor', Asesor);
auth.get('/inventario', Inventario);
auth.get('/compraracciones', consultarAcciones);

export default auth;
