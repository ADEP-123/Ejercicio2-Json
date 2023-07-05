import mysql from 'mysql2';
import { Router } from 'express';
const testBackCampus = Router();
let con = undefined;

testBackCampus.use("/", (req, res, next) => {
    con= mysql.createPool(JSON.parse(process.env.MY_CONNECT));
    next();
});

testBackCampus.get("/", (req, res,) => {
    con.query();
    res.send("Get")
});

// testBackCampus.post("/", (req, res) => {
//     res.send("Soy post")
// });

// testBackCampus.put("/", (req, res) => {
//     res.send("Soy put")
// });