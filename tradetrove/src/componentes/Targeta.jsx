import '../estilos-componentes/Targeta.css';

export default function Targeta({ name, description }) {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
