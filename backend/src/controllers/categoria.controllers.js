import getConnection from "../db/database.js";
const connection = getConnection();

//4. QUERY QUE PERMITE LISTAR TODAS LAS BODEGAS ORDENADAS ALFABETICAMENTE
const getStorageNames = (req, res) => {
    connection.query(/*sql*/`SELECT * FROM bodegas ORDER BY nombre`, (err, data, fil) => {
        if (err) {
            res.send(err)
        } else {
            res.json(data)
        }
    });
}


//6. QUERY QUE PERMITE LITAR PRODUCTOS EN ORDEN DESCENDENTE POR EL CAMPO TOTAL
const getAllProducts = (req, res) => {
    connection.query(/*sql*/`SELECT id_producto, SUM(cantidad) AS Total
    FROM inventarios
    GROUP BY id_producto
    ORDER BY Total DESC`, (err, data, fil) => {
        if (err) {
            res.send(err)
        } else {
            res.json(data)
        }
    });
}

export const methodsHTTP = {
    getAllProducts: getAllProducts,
    getStorageNames: getStorageNames
}

