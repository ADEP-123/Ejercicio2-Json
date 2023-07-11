import express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { productos } from '../controllerTS/productos.js';

const proxyproductos = express();
proxyproductos.use((req, res, next) => {
    try {
        let data = plainToClass(productos, req.body, { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyproductos;