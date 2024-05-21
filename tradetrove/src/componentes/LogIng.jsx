import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../estilos-componentes/Loguin.module.css';

function Loguin() {
  const [showPassword, setShowPassword] = useState(false);

  // Función para alternar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.containers}>
      <div className={styles.containers_t}>
        <div className={styles.containers_titulo}>
          <h1 className={styles.containers_letra_titulo}>LOG IN</h1>
        </div>
      </div>
      <form>
        <label>
          <p className={styles.containers_parrafo}>nombre completo: </p>
          <input className={styles.containers__input} type='text' name='nombre' placeholder='Ingrese su nombre' />
        </label>
        <br />
        <label>
          <p className={styles.containers_parrafo}>Correo electronico: </p>
          <input
            className={styles.containers__input}
            type='email'
            name='email'
            placeholder='Ingrese su correo electrónico'
          />
        </label>
        <br />
        <label>
          <p className={styles.containers_parrafo}>Contraseña: </p>
          <div className='password-field'>
            <input
              className='containers__input'
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Ingrese su contraseña'
            />
            <button type={styles.button} className='toggle-password' onClick={togglePasswordVisibility}>
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </label>
        <br />
        <NavLink to='/targeta'>
          <div className={styles.Datos}>
            <button type='submit'>LOG IN</button>
          </div>
        </NavLink>
      </form>
    </div>
  );
}

export default Loguin;
