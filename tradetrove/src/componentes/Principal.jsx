import React from 'react';
import '../estilos-componentes/Princi.css';

function Principal() {
  return (
    <div>
      <div className='Container'>
        
        <h2>
          <strong>¡TU PLATAFORMA PARA</strong> <strong>INVERTIR CON CONFIANZA!</strong>
        </h2>
      </div>
      <div className='info1'>
        
        <h5>
          <strong>
            ¡Bienvenido a TradeTrove! Aquí encontrarás todo lo que necesitas para comenzar a invertir en el emocionante
            mundo de las acciones. Desde empresas globales hasta oportunidades locales, estamos aquí para guiarte en tu
            viaje hacia el éxito financiero.
          </strong>
        </h5>
      </div>
      <div className='titulo'>
        
        <h3>
          <strong>¿Por qué elegir TradeTrove?</strong>
        </h3>
      </div>
      <div className='info2'>
       
        <h5>
          <ol>
            <li>
              Acceso global: Explora una amplia gama de acciones de empresas internacionales, disponibles para invertir
              desde cualquier parte del mundo.{' '}
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
        </h5>
      </div>
      <div className='titulo'>
       
        <h3>
          <strong>¿Listo para comenzar?</strong>
        </h3>
      </div>
      <div className='info1'>
        
        <h5>
          <strong>
            Regístrate ahora para acceder a todas las oportunidades de inversión que TradeTrove tiene para ofrecer.
          </strong>
        </h5>
      </div>
    </div>
  );
}

export default Principal;
