import React from 'react';
import styles from '../estilos-componentes/TargetaCompra.module.css';

function TarjetaAcciones({ nombre, valor, onAñadirAlCarrito }) {
  return (
    <div className={styles.card}>
      <div className={styles.circle}></div>
      <div>{nombre}</div>
      <div>{valor}</div>
      <button className={styles.comprar} onClick={() => onAñadirAlCarrito(valor)}>
        Comprar
      </button>
    </div>
  );
}

export default TarjetaAcciones;
