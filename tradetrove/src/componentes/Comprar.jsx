import React from 'react';
import dataCompra from '../data/compra';
import styles from '../estilos-componentes/Comprar.module.css';
import Card from './TargetaCompra';

function Comprar() {
  const dataList = dataCompra.map((d) => {
    return <Card nombre={d.nombre} valor={d.valor} />;
  });

  return (
    <div className={styles.App}>
      <div className={styles.titulo}>
        <h1>ACCIONES DISPONIBLES</h1>
      </div>
      <div className={styles.contenido}>{dataList}</div>
      <button className={styles.comprar}>Comprar</button>
    </div>
  );
}

export default Comprar;
