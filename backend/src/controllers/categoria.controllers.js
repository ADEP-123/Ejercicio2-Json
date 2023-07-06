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

//5. QUERY QUE PERMITE CREAR UNA BODEGA
const postBodegas = (req, res) => {
    // const columnMapping = {
    //     ID: 'id',
    //     NOMBRE: 'nombre',
    //     RESPONSABLE: 'id_responsable',
    //     ESTADO: 'estado',
    //     CREADOR: 'created_by',
    //     ACTUALIZADOR: 'update_by',
    //     FECHA_CREACION: 'created_at',
    //     FECHA_ACTUALIZACION: 'updated_at',
    //     FECHA_ELIMINACION: 'deleted_at'
    // }

    const { ID, NOMBRE, RESPONSABLE, ESTADO, CREADOR, ACTUALIZADOR, FECHA_CREACION, FECHA_ACTUALIZACION, FECHA_ELIMINACION } = req.query


    connection.query(/*sql*/`
    

    INSERT INTO bodegas (id,nombre,id_responsable,estado,created_by,update_by,created_at,updated_at,deleted_at) VALUES (?,?,?,?,?,?,?,?,?)`, [ID, NOMBRE, RESPONSABLE, ESTADO, CREADOR, ACTUALIZADOR, FECHA_CREACION, FECHA_ACTUALIZACION, FECHA_ELIMINACION], (err, data, fil) => {
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
    getStorageNames: getStorageNames,
    postBodegas: postBodegas
}

