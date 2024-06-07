import React from 'react';
import styles from '../estilos-componentes/TargetaCompra.module.css';

function TarjetaAcciones({ idUsuario, idAccion, nombre, valor, onAñadirAlCarrito }) {
  const handleClick = () => {
    console.log('Datos enviados:', { idUsuario, idAccion, valor }); // Agrega esta línea para depuración
    onAñadirAlCarrito(idUsuario, idAccion, valor);
  };

  return (
    <div className={styles.card}>
      <div className='circle'></div>
      <h3>{nombre}</h3>
      <p>Precio: ${valor}</p>
      <button onClick={handleClick}>Comprar</button>
    </div>
  );
}

export default TarjetaAcciones;
