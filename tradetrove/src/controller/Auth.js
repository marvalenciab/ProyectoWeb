const API = 'http://localhost:3000'
export const Añadir =async(user)=>{
       
    const url = `${API}/Registrar`
    const opciones = {
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(user)
    }
    try{
        const response = await fetch(url,opciones)
        if(response.status != 200){
            throw new Error('Hubo un problema en realizar la solicitud')
        }
        const Data = await response.json()
        
        console.log(response)
        console.log(Data)
        
        return Data
    }catch(error){
        console.log(error)
    }

}

export const IniciarUser  = async(user)=>{

    const url = `${API}/iniciar`
    const opciones = {
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(user)
    }
    try{
        const response = await fetch(url,opciones)
        if(response.status != 200){
            throw new Error('Hubo un problema en realizar la solicitud')
        }
        const Data = await response.json()
        return Data
    }catch(error){
        console.log(error)
    }
}