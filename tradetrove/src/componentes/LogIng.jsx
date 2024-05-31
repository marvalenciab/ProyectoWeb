import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../estilos-componentes/Loguin.module.css";
import { ProviderContext } from "../context/contextProvider";
import { useNavigate } from "react-router-dom";

function Loguin() {
  const navigation = useNavigate()
  const {Iniciar,setValidadCion,ValidadCion} = useContext(ProviderContext)
  const [showPassword, setShowPassword] = useState(false);
  const [nombre, setnombre] = useState("");
  const [correoElectronico, setcorreoElectronico] = useState("");
  const [contraseña, setcontraseña] = useState("");

  const getContraseña = (e) => {
    setcontraseña(e.target.value);
  };

  const getNombre = (e) => {
    setnombre(e.target.value);
  };

  const getCorreoElectoronico = (e) => {
    setcorreoElectronico(e.target.value);
  };
  // Función para alternar la visibilidad de la contraseña
  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };


  const hadleSubmint =(e)=>{
    e.preventDefault()
    const user={
       nombre:nombre,
       correo:correoElectronico,
       contraseña
    }

    Iniciar(user)
    
  }
  useEffect(() => {
    if(ValidadCion){
      navigation('/targeta')
      setValidadCion(false)
    }
  }, [ValidadCion])
  


  return (
    <div className={styles.containers}>
      <div className={styles.containers_t}>
        <div className={styles.containers_titulo}>
          <h1 className={styles.containers_letra_titulo}>LOG IN</h1>
        </div>
      </div>
      <form onSubmit={hadleSubmint}>
        <label>
          <p className={styles.containers_parrafo}>nombre completo: </p>
          <input
            className={styles.containers__input}
            type="text"
            name="nombre"
            placeholder="Ingrese su nombre"
            value={nombre}
            onChange={getNombre}
          />
        </label>
        <br />
        <label>
          <p className={styles.containers_parrafo}>Correo electronico: </p>
          <input
            className={styles.containers__input}
            type="email"
            name="email"
            placeholder="Ingrese su correo electrónico"
            value={correoElectronico}
            onChange={getCorreoElectoronico}
          />
        </label>
        <br />
        <label>
          <p className={styles.containers_parrafo}>Contraseña: </p>
          <div className="password-field">
            <input
              className="containers__input"
              type={showPassword ? "text" : "password"}
              name="password"
              value={contraseña}
              onChange={getContraseña}
              placeholder="Ingrese su contraseña"
            />
            <button
              type={styles.button}
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </label>
        <br />

        <div className={styles.Datos}>
          <button type="submit">LOG IN</button>
        </div>
      </form>
    </div>
  );
}

export default Loguin;
