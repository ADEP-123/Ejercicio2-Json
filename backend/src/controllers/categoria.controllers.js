import getConnection from "../db/database.js";


const getAllProducts = (req, res) => {
    const connection = getConnection();
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
    getAllProducts: getAllProducts
}

