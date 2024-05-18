import React from 'react';
import { NavLink } from 'react-router-dom';
import '../estilos-componentes/BarraPrin.css';
function BarraPri() {
  return (
    <div class='BarraP'>
      <NavLink to='/sobreNosotros'>
        {' '}
        <button>SOBRE NOSOTROS</button>
      </NavLink>
      <NavLink to='/Cuenta'>
        {' '}
        <button>SIGN UP / LOG IN</button>
      </NavLink>
    </div>
  );
}
export default BarraPri;
