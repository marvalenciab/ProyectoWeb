import React from "react";
import "../estilos-componentes/Cuerpo.css"
import { NavLink } from "react-router-dom";

function Cuerpo(){
    return(
       
    <div class="container">
        <div className="container__div" >
          <button className="logo" > </button>
          
          <h1> <strong>!COMIENZA TU EXPERIENCIA!</strong> </h1>
          <div class="buttons">
             <NavLink to='/login'><a href="">Log in</a></NavLink>
             <NavLink to='/about'><a href="">Sign Up</a></NavLink>
          </div>
        </div>
    </div>

    )
}
export default Cuerpo;