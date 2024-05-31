import {config} from 'dotenv'

config();

export const PORT = process.env.PORT;
export const TOKEN_SECRECT = process.env.TOKEN_SECRET
export const Configdb = {
    PORT:process.env.PORT_DB,
    DATABASE:process.env.DATABASE ,
    PASSWORD : process.env.PASSWORD,
    HOST: process.env.HOST ,
    USER:process.env.USER 
} 

