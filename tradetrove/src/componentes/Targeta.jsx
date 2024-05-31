import styles from '../estilos-componentes/Targeta.module.css';

export default function Targeta({ name, description }) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
