import express from 'express';                 
import auth from './routes/auth.routes.js';

const App = express()
App.use(express.json())
App.use(auth)



export default App;