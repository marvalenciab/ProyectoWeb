import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../estilos-componentes/Cuerpo.module.css';

function Cuerpo() {
  return (
    <div className={styles.container}>
      <div className={styles.container__div}>
        <h1>
          {' '}
          <strong>!COMIENZA TU EXPERIENCIA!</strong>{' '}
        </h1>
        <div className={styles.buttons}>
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
