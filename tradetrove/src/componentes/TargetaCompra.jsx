import React from 'react';
import './Tarjeta.css';

function TarjetaAcciones({ nombre, valor }) {
  return (
    <div className='card'>
      <button className='botonCompra'>
        <div className='circle'></div>
        <div>{nombre}</div>
        <div>{valor}</div>
      </button>
    </div>
  );
}

export default TarjetaAcciones;
