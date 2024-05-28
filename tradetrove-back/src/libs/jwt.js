import jwt from "jsonwebtoken";
import {TOKEN_SECRECT} from '../config/config.js'


export const CrearToken = (payload)=>{
    return new Promise((resolve,reject)=>{
        jwt.sign(payload,TOKEN_SECRECT,{
          expiresIn:'1d' 
        },(error, token)=>{
            if(error){
                return reject(error)
            }
            resolve(token)
        })
    })
}