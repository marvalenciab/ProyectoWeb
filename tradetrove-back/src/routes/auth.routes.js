import {Router} from 'express'
import { Register,Iniciar } from '../controller/Validation.js';

const auth = Router();


auth.post('/Registrar', Register)
auth.get('/iniciar', Iniciar)
export default auth