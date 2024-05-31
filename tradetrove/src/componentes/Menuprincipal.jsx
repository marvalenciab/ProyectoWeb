import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../estilos-componentes/Menuprincipal.module.css';

function Menuprincipal() {
  return (
    <div className={styles.Menu}>
      <div className={styles.App1}>
        <div className={styles.barra2}>
          <div className={styles.circle1}>
            <img className={styles.img} />
          </div>
        </div>
      </div>
      <div className={styles.acciones}>
        <button className={styles.compra}>
          <button className={styles.bcompra}>
            <NavLink to='/compra'>
              <a href=''>Compra</a>
            </NavLink>
          </button>
        </button>
        <button className={styles.estado}>
          <button className={styles.bestado}>
            <NavLink to='/estado'>
              <a href=''>Estado</a>
            </NavLink>
          </button>
        </button>
        <button className={styles.asesor}>
          <button className={styles.basesor}>
            <NavLink to='/asesor'>
              <a href=''>Asesor</a>
            </NavLink>
          </button>
        </button>
        <button className={styles.venta}>
          <button className={styles.bventa}>
            <NavLink to='/venta'>
              <a href=''>Venta</a>
            </NavLink>
          </button>
        </button>
      </div>
    </div>
  );
}

export default Menuprincipal;
