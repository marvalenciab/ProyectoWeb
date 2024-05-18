
import React from "react";
import {NavLink} from "react-router-dom"
import "../estilos-componentes/NavBar.css"
function NavBar(){
    return(
        <div class="navbar">
        <NavLink to="/sobreNosotros"> <button >SOBRE NOSOTROS</button></NavLink>
        <NavLink to="/singLog"> <button >SING UP/LOG IN</button></NavLink>
        </div>
        
    )

}
export default NavBar;
