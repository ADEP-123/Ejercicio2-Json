import { Router } from 'express';
import { methodsHTTP as categoriaController } from '../controllers/categoria.controllers.js';
const router = Router();

router.get("/allProducts", categoriaController.getAllProducts);

export default router;