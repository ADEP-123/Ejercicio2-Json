import express from "express";
import categoriaRoutes from './routers/categorias.routes.js';

const appExpress = express();

appExpress.use(express.json());
appExpress.use("/testBack",categoriaRoutes);

export default appExpress;