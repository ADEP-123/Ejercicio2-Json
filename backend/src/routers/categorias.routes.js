import { Router } from 'express';
import { methodsHTTP as categoriaController } from '../controllers/categoria.controllers.js';
import proxybodegas from '../middlewares/proxybodegas.js';
import proxyproductos from '../middlewares/proxyproductos.js';
import proxyinventarios from '../middlewares/proxyinventarios.js';
const router = Router();

//4. ENPOINT QUE PERMITE LISTAR TODAS LAS BODEGAS ORDENADAS ALFABETICAMENTE
router.get("/allStorageNames", categoriaController.getStorageNames);

//5. ENDPOINT QUE PERMITE CREAR UNA BODEGA
router.post("/postBodegas", proxybodegas, categoriaController.postBodegas);

//6. ENDPOINT QUE PERMITE LITAR PRODUCTOS EN ORDEN DESCENDENTE POR EL CAMPO TOTAL
router.get("/allProducts", categoriaController.getAllProducts);

//7. ENDPOINT QUE PERMITA INSERTAR UN PRODUCTO Y ASIGNE UNA CANTIDAD INICIAL DEL MISMO EN LA TABLA INVENTARIOS EN UNA DE LAS BODEGAS POR DAFAULT
router.post("/newProduct", proxyproductos, categoriaController.newProduct);

//8. ENDPOINT QUE PERMITA INSERTAR REGISTROS EN LA TABLA INVENTARIOS, DEBE VALIDAR SI LA COMBINACION BODEGA PRODUCTO YA EXISTE
router.post("/newInventario",proxyinventarios, categoriaController.newInventario);

//9. ENDPOINT QUE PERMITA TRASLADAR CANTIDADES DE UN PRODUCTO DE UNA BODEGA A OTRA, DEBE VALIDAD QUE LA CANTIDAD A TRASLADAR EXISTA EN AL BODEGA DE DONDE SALE SI NO ENVIAR UN MENSAJE
router.post("/trasBodega"categoriaController.trasladoBodega);

export default router;