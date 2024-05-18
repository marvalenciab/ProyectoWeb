import React, { useState } from 'react';
import '../estilos-componentes/Loguin.css';

function Loguin() {
  const [showPassword, setShowPassword] = useState(false);

  // Función para alternar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='container'>
      <form>
        <label>
          Nombre:
          <input type='text' name='nombre' placeholder='Ingrese su nombre' />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input type='email' name='email' placeholder='Ingrese su correo electrónico' />
        </label>
        <br />
        <label>
          Contraseña:
          <div className='password-field'>
            <input type={showPassword ? 'text' : 'password'} name='password' placeholder='Ingrese su contraseña' />
            <button type='button' className='toggle-password' onClick={togglePasswordVisibility}>
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </label>
        <br />
        <div className='Datos'>
          <button type='submit'>LOG IN</button>
        </div>
      </form>
    </div>
  );
}

export default Loguin;
