import { Router } from 'express';
import { methodsHTTP as categoriaController } from '../controllers/categoria.controllers.js';
const router = Router();

//4. ENPOINT QUE PERMITE LISTAR TODAS LAS BODEGAS ORDENADAS ALFABETICAMENTE
router.get("/allStorageNames", categoriaController.getStorageNames);

//5. ENDPOINT QUE PERMITE CREAR UNA BODEGA
router.post("/postBodegas", categoriaController.postBodegas);

//6. ENDPOINT QUE PERMITE LITAR PRODUCTOS EN ORDEN DESCENDENTE POR EL CAMPO TOTAL
router.get("/allProducts", categoriaController.getAllProducts);

//7. ENDPOINT QUE PERMITA INSERTAR UN PRODUCTO Y ASIGNE UNA CANTIDAD INICIAL DEL MISMO EN LA TABLA INVENTARIOS EN UNA DE LAS BODEGAS POR DAFAULT
router.post("/newProduct", categoriaController.newProduct);

export default router;