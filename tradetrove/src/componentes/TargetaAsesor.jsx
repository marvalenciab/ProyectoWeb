import React, { Suspense } from 'react';
import estilos from '../estilos-componentes/TargetaAsesor.module.css';
import { fetchData } from '../fetchdata.js';

const apiData = fetchData('http://localhost:3000/asesor');

const VentanaAsesor = () => {
  const data = apiData.read();

  return (
    <div className={estilos.ventana_asesor}>
      <h2 className={estilos.titulos}>Asesores</h2>
      <Suspense fallback={<div>Loading....</div>}>
        <div className={estilos.asesores_container}>
          {data.map((asesor, index) => (
            <div key={index} className={estilos.asesor}>
              <img src={asesor.foto} alt={asesor.Nombre} className={estilos.foto_asesor} />
              <div>
                <h3>{asesor.Nombre}</h3>
                <p>Correo: {asesor.Correo}</p>
                <p>Teléfono: {asesor.Telefono}</p>
                <p>Entidad: {asesor.entidad}</p>
                <p>Descripción: {asesor.Descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default VentanaAsesor;
