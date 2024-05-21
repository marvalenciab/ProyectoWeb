import { useState } from 'react';
import styles from '../estilos-componentes/SingUp.module.css';
export default function SingUp() {
  const [Nombre, setNombre] = useState('');

  return (
    <div className={styles.container}>
      <div className='container__div containerSingUp'>
        <div className={styles.container__div__title}>
          <h1 className={styles.container__div__title__titulo}>SING UP</h1>
        </div>
        <form
          className={styles.container__div__form}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(Nombre);
          }}
        >
          <div className={styles.container__div__form__conten}>
            <p className={styles.container__div__form__conten__parrafo}>nombre completo: </p>
            <input
              className={styles.container__div__form__conten__input}
              type='text'
              placeholder='  PEPITO GARCIA'
              onChange={(e) => {
                setNombre(e.target.value);
                console.log(Nombre);
              }}
            />
          </div>
          <div className={styles.container__div__form__conten}>
            <p className={styles.container__div__form__conten__parrafo}>nombre de usuario:</p>
            <input type='text' className={styles.container__div__form__conten__input} placeholder='  PEPITO' />
          </div>
          <div className={styles.container__div__form__conten}>
            <p className={styles.container__div__form__conten__parrafo}>correo electronico:</p>
            <input
              type='email'
              className={styles.container__div__form__conten__input}
              placeholder='  PEPITO123@GMAIL.COM'
            />
          </div>
          <div className={styles.container__div__form__conten}>
            <p className={styles.container__div__form__conten__parrafo}>contraseña:</p>
            <input type='password' className={styles.container__div__form__conten__input} placeholder='  PEPITO123' />
          </div>

          <button className={styles.container__div__form__conten__button}>Sing Up</button>

          <hr className='rayita' />
        </form>
      </div>
    </div>
  );
}
