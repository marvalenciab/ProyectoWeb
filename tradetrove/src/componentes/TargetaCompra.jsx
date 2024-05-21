import React from 'react';
import styles from '../estilos-componentes/TargetaCompra.module.css';

function TarjetaAcciones({ nombre, valor }) {
  return (
    <div className={styles.card}>
      <button className={styles.botonCompra}>
        <div className={styles.circle}></div>
        <div>{nombre}</div>
        <div>{valor}</div>
      </button>
    </div>
  );
}

export default TarjetaAcciones;
