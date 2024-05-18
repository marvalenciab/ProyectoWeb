import { useState } from 'react';
import'../estilos-componentes/SingUp.css';
export default function SingUp() {
  const [Nombre, setNombre] = useState('')

  return (
    <div class='container'>
      <div className='container__div containerSingUp'>
        <div className='container__div__title'>
            <h1 className='container__div__title__titulo'>SING UP</h1>
        </div>
        <form className='container__div__form' onSubmit={(e)=>{
           e.preventDefault();
           console.log(Nombre)
        }}>
           <div className='container__div__form__conten'>
             <p className='container__div__form__conten__parrafo'>nombre completo: </p>
             <input className='container__div__form__conten__input' type="text" placeholder='  PEPITO GARCIA' onChange={(e)=>{
                setNombre(e.target.value)
                console.log(Nombre)
             }}/>
           </div>
           <div className='container__div__form__conten'>
             <p className='container__div__form__conten__parrafo'>nombre de usuario:</p>
             <input type="text"  className='container__div__form__conten__input' placeholder='  PEPITO'/>
           </div>
           <div className='container__div__form__conten'>
             <p className='container__div__form__conten__parrafo'>correo electronico:</p>
             <input type="email"  className='container__div__form__conten__input' placeholder='  PEPITO123@GMAIL.COM'/>
           </div>
           <div className='container__div__form__conten'>
             <p className='container__div__form__conten__parrafo'>contraseña:</p>
             <input type="password"  className='container__div__form__conten__input'  placeholder='  PEPITO123'/>
           </div>

            <button className='container__div__form__conten__button'>
                Sing Up
            </button>
  
              <hr className='rayita'/>       
        </form>


        
      </div>
    </div>
  );
}
