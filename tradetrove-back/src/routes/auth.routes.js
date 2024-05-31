import { Router } from 'express';
import { consultarAcciones } from '../controller/Compra.js';

import { Iniciar, Register } from '../controller/Validation.js';

const auth = Router();
auth.post('/Registrar', Register);
auth.post('/iniciar', Iniciar);
auth.get('/compraracciones', consultarAcciones);
export default auth;
