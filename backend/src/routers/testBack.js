import mysql from 'mysql2';
import { Router } from 'express';
const testBackCampus = Router();
let con = undefined;

testBackCampus.use("/", (req, res, next) => {
    let myConfig = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(myConfig);
    next();
});

testBackCampus.get("/", (req, res,) => {

    con.query(/*sql*/`SELECT id_producto, SUM(cantidad) AS Total
    FROM inventarios
    GROUP BY id_producto
    ORDER BY Total DESC`, (err, data, fil) => {
        res.send(data)
    });
});

// testBackCampus.post("/", (req, res) => {
//     res.send("Soy post")
// });

// testBackCampus.put("/", (req, res) => {
//     res.send("Soy put")
// });
export default testBackCampus;