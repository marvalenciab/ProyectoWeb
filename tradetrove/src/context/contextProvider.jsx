import { createContext, useEffect, useState } from "react";
import { Añadir,IniciarUser } from "../controller/Auth.js";
import { json } from "react-router-dom";

export const ProviderContext  = createContext()

export const Appprovder =({children})=>{
   const [ValidadCion, setValidadCion] = useState(false)
   

    const RegitrarUser = async(user) =>{
        const Valor = await Añadir(user)
        
    }


    const Iniciar = async(user) =>{
        const Valor = await IniciarUser(user)
        if(Valor.message === "El usuario ha iniciado seccion faborablemente"){
            setValidadCion(true)
        }
    }
   
    

    return (
       <ProviderContext.Provider value={{RegitrarUser,Iniciar,setValidadCion,ValidadCion}}>
        {children}
       </ProviderContext.Provider>
    )
}