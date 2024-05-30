import { Router } from 'express';
import { Asesor, Inventario } from '../controller/Servicios.js';
import { Iniciar, Register } from '../controller/Validation.js';

const auth = Router();

auth.post('/Registrar', Register);
auth.get('/iniciar', Iniciar);
auth.get('/asesor', Asesor);
auth.get('/inventario', Inventario);

export default auth;
