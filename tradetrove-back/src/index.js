
import App  from "./app.js";
import { PORT ,Configdb } from "./config/config.js";

console.log(Configdb)

App.listen(PORT , ()=>{
    console.log(`Se esta escuchando por el pueto ${PORT}`)
})