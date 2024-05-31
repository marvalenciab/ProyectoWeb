import { useContext, useState } from "react";
import styles from "../estilos-componentes/SingUp.module.css";
import { ProviderContext } from "../context/contextProvider";
export default function SingUp() {
  const [Nombre, setNombre] = useState("");
  const [pais, setpais] = useState("");
  const [correo, setcorreo] = useState("");
  const [contraseña, setcontraseña] = useState("");
  const {RegitrarUser} = useContext(ProviderContext)

  const getNoombre = (e)=>{
     setNombre(e.target.value)
  }

  const getpais =(e)=>{
    setpais(e.target.value)
  }

  const getCorreo =(e)=>{
    setcorreo(e.target.value)
  }

  const getContresaña =(e)=>{
      setcontraseña(e.target.value)
  }

  
 const haleSubmit = (e)=>{
  e.preventDefault()
  if(!Nombre || !pais || !correo || !contraseña){
        alert('falta llenar un campo')
  }

  const user ={
    nombre:Nombre,
    pais,
    correo,
    contraseña

  }
  
  
  RegitrarUser(user)

  setNombre("")
  setcontraseña("")
  setpais("")
  setcorreo("")

 }


  return (
    <div className={styles.container}>
      <div className="container__div containerSingUp">
        <div className={styles.container__div__title}>
          <h1 className={styles.container__div__title__titulo}>SING UP</h1>
        </div>
        <form
          className={styles.container__div__form}
          onSubmit={haleSubmit}
        >
          <div className={styles.container__div__form__conten}>
            <p className={styles.container__div__form__conten__parrafo}>
              nombre completo:{" "}
            </p>
            <input
              className={styles.container__div__form__conten__input}
              type="text"
              placeholder="  PEPITO GARCIA"
              value={Nombre}
              onChange={getNoombre}

            />
          </div>

          <div className={styles.container__div__form__conten}>
            <p className={styles.container__div__form__conten__parrafo}>
              pais:
            </p>
            <input
              type="text"
              className={styles.container__div__form__conten__input}
              placeholder="  PEPITO"
              value={pais}
              onChange={getpais}
            />
          </div>

          <div className={styles.container__div__form__conten}>
            <p className={styles.container__div__form__conten__parrafo}>
              correo electronico:
            </p>
            <input
              type="email"
              className={styles.container__div__form__conten__input}
              placeholder="  PEPITO123@GMAIL.COM"
              value={correo}
              onChange={getCorreo}
            />
          </div>

          <div className={styles.container__div__form__conten}>
            <p className={styles.container__div__form__conten__parrafo}>
              contraseña:
            </p>
            <input
              type="password"
              className={styles.container__div__form__conten__input}
              placeholder="  PEPITO123"
              onChange={getContresaña}
              value={contraseña}
            />
          </div>

          <button className={styles.container__div__form__conten__button}>
            Sing Up
          </button>

          <hr className="rayita" />
        </form>
      </div>
    </div>
  );
}
