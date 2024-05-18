import React from 'react';
import { NavLink } from 'react-router-dom';
import '../estilos-componentes/Loguin.css';

function Log() {
  return (
    <div className='Container'>
      <NavLink to='/Principal'>
        <button className='logo'> </button>
      </NavLink>
      <div className='form-container'>
        <form>
          <label>
            Nombre:
            <input type='text' name='nombre' />
          </label>
          <br />
          <label>
            Correo Electrónico:
            <input type='email' name='email' />
          </label>
          <br />
          <label>
            Contraseña:
            <input type='password' name='password' />
          </label>
          <br />
          <button type='submit'>Registrarse</button>
        </form>
      </div>
    </div>
  );
}
export default Log;
