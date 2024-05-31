
import App  from "./app.js";
import { PORT} from "./config/config.js";



App.listen(PORT , ()=>{
    console.log(`Se esta escuchando por el pueto ${PORT}`)
})