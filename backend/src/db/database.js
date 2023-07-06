import mysql from 'mysql2';
import config from "../config.js";

const con = mysql.createPool(config.database);
// console.log("esta es la conexion", con);


const getConnection = () => {
    return con
}
export default getConnection;