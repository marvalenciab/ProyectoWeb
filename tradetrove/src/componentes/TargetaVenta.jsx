import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Importa el icono de chulito
import estilos from '../estilos-componentes/TargetaVenta.module.css';
import { fetchData } from '../fetchdataVen.js';

const Venta = () => {
  const [accionesSeleccionadas, setAccionesSeleccionadas] = useState([]);
  const [mostrarInventario, setMostrarInventario] = useState(false);
  const [cambiarPrecioId, setCambiarPrecioId] = useState(null); // Estado para rastrear la acción seleccionada para cambiar el precio
  const [nuevoPrecio, setNuevoPrecio] = useState(''); // Estado para rastrear el nuevo precio ingresado
  const [acciones, setAcciones] = useState([]); // Estado para almacenar las acciones obtenidas de la API

  useEffect(() => {
    // Llama a la función fetchData para obtener las acciones desde la API
    fetchData('http://localhost:3000/Inventario').then((data) => {
      // Actualiza el estado de acciones con los datos obtenidos
      setAcciones(data.acciones);
    });
  }, []);

  const toggleMostrarAcciones = () => {
    setMostrarInventario(!mostrarInventario);
  };

  const toggleSeleccion = (accion) => {
    const index = accionesSeleccionadas.findIndex((a) => a.id_accion === accion.id_accion);
    if (index === -1) {
      setAccionesSeleccionadas([...accionesSeleccionadas, { ...accion, precio: accion.valor_accion }]);
    } else {
      const nuevasAcciones = [...accionesSeleccionadas];
      nuevasAcciones.splice(index, 1);
      setAccionesSeleccionadas(nuevasAcciones);
    }
  };

  const handleChangePrecio = (id, precio) => {
    setCambiarPrecioId(id); // Establece la acción seleccionada para cambiar el precio
    setNuevoPrecio(precio.toString()); // Establece el precio actual como el valor predeterminado del campo de entrada
  };

  const confirmarCambioPrecio = () => {
    const nuevasAcciones = accionesSeleccionadas.map((accion) => {
      if (accion.id_accion === cambiarPrecioId) {
        return { ...accion, precio: parseFloat(nuevoPrecio) }; // Actualiza el precio de la acción seleccionada
      }
      return accion;
    });
    setAccionesSeleccionadas(nuevasAcciones);
    setCambiarPrecioId(null); // Restablece la acción seleccionada para cambiar el precio
  };

  return (
    <div className={estilos.venta}>
      <div className={estilos.venta_header}>
        <h2>Vender Acciones</h2>
        <button className={estilos.btn_inventario} onClick={toggleMostrarAcciones}>
          +
        </button>
      </div>
      {mostrarInventario && (
        <div className={estilos.inventario}>
          {acciones.map((accion) => (
            <div key={accion.id_accion} className={`${estilos.accion_card}`} onClick={() => toggleSeleccion(accion)}>
              <div className={estilos.accion_circulo} style={{ backgroundImage: `url(${accion.ruta_imagen})` }}></div>
              <h3 className={estilos.accion_titulo}>{accion.nombre}</h3>
              <p>Precio: ${accion.valor_accion}</p>
            </div>
          ))}
        </div>
      )}
      <div className={estilos.acciones_seleccionadas}>
        <div className={estilos.titulo_seleccionadas}>
          <h3>Acciones Seleccionadas:</h3>
        </div>
        <div className={estilos.contenido_seleccionadas}>
          <div className={estilos.inventario}>
            {accionesSeleccionadas.map((accion) => (
              <div key={accion.id_accion} className={`${estilos.accion_card}`}>
                <div className={estilos.accion_circulo} style={{ backgroundImage: `url(${accion.ruta_imagen})` }}></div>
                <h3 className={estilos.accion_titulo}>{accion.nombre}</h3>
                <p>Precio: ${accion.precio}</p>
                {/* Condición para mostrar el campo de entrada y el botón de confirmación */}
                {cambiarPrecioId === accion.id_accion ? (
                  <>
                    <input type='number' value={nuevoPrecio} onChange={(e) => setNuevoPrecio(e.target.value)} />
                    <FaCheckCircle onClick={confirmarCambioPrecio} /> {/* Icono de chulito */}
                  </>
                ) : (
                  <button onClick={() => handleChangePrecio(accion.id_accion, accion.precio)}>Cambiar Precio</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venta;
