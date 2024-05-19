import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../estilos-componentes/Loguin.css';

function Loguin() {
  const [showPassword, setShowPassword] = useState(false);

  // Función para alternar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='containers'>
      <div className='containers_t'>
        <div className='containers_titulo'>
          <h1 className='containers_letra_titulo'>LOG IN</h1>
        </div>
      </div>
      <form>
        <label>
          <p className='containers_parrafo'>nombre completo: </p>
          <input className='containers__input' type='text' name='nombre' placeholder='Ingrese su nombre' />
        </label>
        <br />
        <label>
          <p className='containers_parrafo'>Correo electronico: </p>
          <input className='containers__input' type='email' name='email' placeholder='Ingrese su correo electrónico' />
        </label>
        <br />
        <label>
          <p className='containers_parrafo'>Contraseña: </p>
          <div className='password-field'>
            <input
              className='containers__input'
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Ingrese su contraseña'
            />
            <button type='button' className='toggle-password' onClick={togglePasswordVisibility}>
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </label>
        <br />
        <NavLink to='/targeta'>
          <div className='Datos'>
            <button type='submit'>LOG IN</button>
          </div>
        </NavLink>
      </form>
    </div>
  );
}

export default Loguin;
