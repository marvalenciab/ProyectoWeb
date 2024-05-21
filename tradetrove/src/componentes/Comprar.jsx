import React from 'react';
import dataCompra from '../data/compra';
import '../estilos-componentes/Comprar.module.css';
import Card from './TargetaCompra';

function Comprar() {
  const dataList = dataCompra.map((d) => {
    return <Card nombre={d.nombre} valor={d.valor} />;
  });

  return (
    <div className='App'>
      <div className='titulo'>
        <h1>ACCIONES DISPONIBLES</h1>
      </div>
      <div className='contenido'>{dataList}</div>
      <button className='comprar'>Comprar</button>
    </div>
  );
}

export default Comprar;
