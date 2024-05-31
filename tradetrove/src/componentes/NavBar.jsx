import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../estilos-componentes/NavBar.module.css';
function NavBar() {
  return (
    <div className={styles.navbar}>
      <NavLink to='/sobreNosotros'>
        {' '}
        <button>SOBRE NOSOTROS</button>
      </NavLink>
      <NavLink to='/'>
        <button className={styles.logo}> </button>
      </NavLink>
      <NavLink to='/singLog'>
        {' '}
        <button>SING UP/LOG IN</button>
      </NavLink>
    </div>
  );
}
export default NavBar;
