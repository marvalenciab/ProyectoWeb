import React from 'react';
import '../estilos-componentes/Princi.css';

function Principal() {
  return (
    <div>
      <div className='Container'>
        <button className='logo'> </button>
        <h1>
          <strong>¡TU PLATAFORMA PARA</strong> <strong>INVERTIR CON CONFIANZA!</strong>
        </h1>
      </div>
      <div className='Informacion'>
        <div className='info1'>
          <button className='logo'> </button>
          <h1>
            <strong>
              ¡Bienvenido a TradeTrove! Aquí encontrarás todo lo que necesitas para comenzar a invertir en el
              emocionante mundo de las acciones. Desde empresas globales hasta oportunidades locales, estamos aquí para
              guiarte en tu viaje hacia el éxito financiero.
            </strong>
          </h1>
        </div>
        <div className='titulo'>
          <button className='logo'> </button>
          <h1>
            <strong>¿Por qué elegir TradeTrove?</strong>
          </h1>
        </div>
        <div className='info2'>
          <button className='logo'> </button>
          <h1>
            <ol>
              <li>
                Acceso global: Explora una amplia gama de acciones de empresas internacionales, disponibles para
                invertir desde cualquier parte del mundo.{' '}
              </li>
              <li>
                Asesoramiento experto: Nuestros corredores están listos para proporcionarte asesoramiento experto y
                ayudarte a tomar decisiones informadas.{' '}
              </li>
              <li>
                Experiencia intuitiva: Navega por nuestra plataforma de manera fácil y eficiente, con herramientas
                intuitivas diseñadas para simplificar tu experiencia de inversión
              </li>
            </ol>
          </h1>
        </div>
        <div className='titulo'>
          <button className='logo'> </button>
          <h1>
            <strong>¿Listo para comenzar?</strong>
          </h1>
        </div>
        <div className='info3'>
          <button className='logo'> </button>
          <h1>
            <strong>
              Regístrate ahora para acceder a todas las oportunidades de inversión que TradeTrove tiene para ofrecer.
            </strong>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Principal;
