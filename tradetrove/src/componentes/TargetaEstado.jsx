import React, { useEffect, useState } from 'react';
import styles from '../estilos-componentes/Estado.module.css';
import TarjetaAccionesEstado from './estado';

function EstadoAcciones() {
  const [acciones, setAcciones] = useState([]);
  const [dataCompra, setDataCompra] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEstadoAcciones = async () => {
      try {
        const response = await fetch('http://localhost:3000/estado');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAcciones(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEstadoAcciones();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const dataList = dataCompra.map((d) => (
    <TarjetaAccionesEstado key={d.id_accion} nombre={d.nombre} valor={d.valor_accion} />
  ));
  return (
    <div className={styles.App}>
      <div className={styles.titulo}></div>
      <div className={styles.contenido}>{dataList}</div>
    </div>
  );
}

export default EstadoAcciones;
