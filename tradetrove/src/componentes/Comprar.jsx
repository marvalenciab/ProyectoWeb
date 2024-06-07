import React, { useEffect, useState } from 'react';
import styles from '../estilos-componentes/Comprar.module.css';
import TarjetaAcciones from './TargetaCompra';

function Comprar() {
  const [dataCompra, setDataCompra] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [idUsuario, setIdUsuario] = useState(null);

  useEffect(() => {
    const fetchAcciones = async () => {
      try {
        const response = await fetch('http://localhost:3000/compraracciones');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const acciones = await response.json();
        setDataCompra(acciones);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAcciones();
  }, []);

  const handleAñadirAlCarrito = async (idUsuario, idAccion, precioCompra) => {
    try {
      const response = await fetch('http://localhost:3000/compraracciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idUsuario, idAccion, precioCompra }),
      });
      if (!response.ok) {
        throw new Error(`Error al añadir al carrito: ${response.statusText}`);
      }
      alert('Añadido al carrito exitosamente');
    } catch (error) {
      alert('Error al añadir al carrito');
      console.error('Error:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const dataList = dataCompra.map((d) => (
    <TarjetaAcciones
      key={d.id_accion}
      nombre={d.nombre}
      valor={d.valor_accion}
      onAñadirAlCarrito={(precio) => handleAñadirAlCarrito(idUsuario, d.id_accion, precio)}
    />
  ));

  return (
    <div className={styles.App}>
      <div className={styles.titulos}>
        <h2 className={styles.titulos}>ACCIONES DISPONIBLES</h2>
      </div>
      <div className={styles.contenido}>{dataList}</div>
    </div>
  );
}

export default Comprar;
