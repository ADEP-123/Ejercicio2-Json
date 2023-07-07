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
/**
 * ? Datos de entrada : 
 ** {
 **"ID": Entero Grande ej (63),
 **"NOMBRE": Varchar ej ("Emily"),
 **"RESPONSABLE": Entero grande, debe coincidir con un id existente de la tabla users ej (11),
 **"ESTADO": Entero ej (1),
 **"CREADOR": Entero grande, debe coincidir con un id existente de la tabla users ej (11),
 **"ACTUALIZADOR": Entero grande, debe coincidir con un id existente de la tabla users ej (11),
 **"FECHA_CREACION": Date-Time ej ("2023-05-25 01:02:57"),
 **"FECHA_ACTUALIZACION": Date-Time ej ("2023-05-25 01:02:57"),
 **"FECHA_ELIMINACION": Date-Time ej ("2023-05-25 01:02:59")
 ** }
 */
const postBodegas = (req, res) => {
    const { ID, NOMBRE, RESPONSABLE, ESTADO, CREADOR, ACTUALIZADOR, FECHA_CREACION, FECHA_ACTUALIZACION, FECHA_ELIMINACION } = req.body;

    connection.query(/*sql*/`
      INSERT INTO bodegas (id, nombre, id_responsable, estado, created_by, update_by, created_at, updated_at, deleted_at) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [ID, NOMBRE, RESPONSABLE, ESTADO, CREADOR, ACTUALIZADOR, FECHA_CREACION, FECHA_ACTUALIZACION, FECHA_ELIMINACION],
        (err, data, fil) => {
            if (err) {
                res.send(err);
            } else {
                res.json(data);
            }
        }
    );
}


//6. QUERY QUE PERMITE LISTAR PRODUCTOS EN ORDEN DESCENDENTE POR EL CAMPO TOTAL
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

//7. QUERY QUE PERMITA INSERTAR UN PRODUCTO Y ASIGNE UNA CANTIDAD INICIAL DEL MISMO EN LA TABLA INVENTARIOS EN UNA DE LAS BODEGAS POR DAFAULT
const newProduct = (req, res) => {
    const { IDPRODUCTO, NOMBRE, DESCRIPCION, ESTADO, CREADOR, ACTUALIZADOR, IDINVENTARIO } = req.body;

    connection.query(/*SQL*/`
    INSERT INTO productos (id, nombre, descripcion, estado, created_by, update_by) VALUES (?, ?, ?, ?, ?, ?)`, [IDPRODUCTO, NOMBRE, DESCRIPCION, ESTADO, CREADOR, ACTUALIZADOR], (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
  
            connection.query(/*sql*/`
            INSERT INTO inventarios (id, id_bodega, id_producto, cantidad, created_by, update_by) VALUES (?,60, ?, 10, ?, ?)`,
                [IDINVENTARIO, IDPRODUCTO, CREADOR, ACTUALIZADOR],
                (err, data) => {
                    if (err) {
                        res.status(500).json({ error: err.message });
                    } else {
                        res.json({ message: 'Producto creado exitosamente' });
                    }
                }
            );
        }
    }
    );
};

export const methodsHTTP = {
    getAllProducts: getAllProducts,
    getStorageNames: getStorageNames,
    postBodegas: postBodegas,
    newProduct: newProduct
}

