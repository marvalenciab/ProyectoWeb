import React from 'react';
import '../estilos-componentes/Menuprincipal.css';

function Menuprincipal() {
  return (
    <div className='Menu'>
      <div className='App1'>
        <div className='barra2'>
          <div className='circle1'>
            <img className='img' />
          </div>
        </div>
      </div>
      <div className='acciones'>
        <button className='compra'>
          <button className='bcompra'>Compra</button>
        </button>
        <button className='estado'>
          <button className='bestado'>Estado</button>
        </button>
        <button className='asesor'>
          <button className='basesor'>Asesor</button>
        </button>
        <button className='venta'>
          <button className='bventa'>Venta</button>
        </button>
      </div>
    </div>
  );
}

export default Menuprincipal;
