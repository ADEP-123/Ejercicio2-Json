import { Router } from 'express';
import { methodsHTTP as categoriaController } from '../controllers/categoria.controllers.js';
const router = Router();

//4. ENPOINT QUE PERMITE LISTAR TODAS LAS BODEGAS ORDENADAS ALFABETICAMENTE
router.get("/allStorageNames", categoriaController.getStorageNames);
//6. ENDPOINT QUE PERMITE LITAR PRODUCTOS EN ORDEN DESCENDENTE POR EL CAMPO TOTAL
router.get("/allProducts", categoriaController.getAllProducts);

export default router;