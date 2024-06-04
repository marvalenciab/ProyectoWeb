import React from 'react';
import styles from '../estilos-componentes/TargetaCompra.module.css';

function TarjetaAccionesEstado({ nombre, valor }) {
  return (
    <div className={styles.card}>
      <div className={styles.circle}></div>
      <div>{nombre}</div>
      <div>{valor}</div>
    </div>
  );
}

export default TarjetaAccionesEstado;
