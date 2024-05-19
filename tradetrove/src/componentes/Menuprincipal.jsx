import React from 'react';
import { NavLink } from 'react-router-dom';
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
          <button className='bcompra'>
            <NavLink to='/compra'>
              <a href=''>Compra</a>
            </NavLink>
          </button>
        </button>
        <button className='estado'>
          <button className='bestado'>
            <NavLink to='/estado'>
              <a href=''>Estado</a>
            </NavLink>
          </button>
        </button>
        <button className='asesor'>
          <button className='basesor'>
            <NavLink to='/asesor'>
              <a href=''>Asesor</a>
            </NavLink>
          </button>
        </button>
        <button className='venta'>
          <button className='bventa'>
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
