import React from 'react';
import { NavLink } from 'react-router-dom';
import '../estilos-componentes/Cuerpo.css';

function Cuerpo() {
  return (
    <div class='container'>
      <div className='container__div'>
        
        
        <h1>
          {' '}
          <strong>!COMIENZA TU EXPERIENCIA!</strong>{' '}
        </h1>
        <div class='buttons'>
          <NavLink to='/login'>
            <a href=''>Log in</a>
          </NavLink>
          <NavLink to='/about'>
            <a href=''>Sign Up</a>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Cuerpo;
