import express from 'express';                 
import auth from './routes/auth.routes.js';
import cors from 'cors'
const App = express()

App.use(cors())
App.use(express.json())
App.use(auth)



export default App;