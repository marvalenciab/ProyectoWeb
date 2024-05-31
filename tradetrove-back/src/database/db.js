import {createPool} from 'mysql2/promise'
import {Configdb} from '../config/config.js'
export const pool = createPool({
    host: Configdb.HOST,
    port: Configdb.PORT,
    database:Configdb.DATABASE,
    user:Configdb.USER,
    password:Configdb.PASSWORD

})
