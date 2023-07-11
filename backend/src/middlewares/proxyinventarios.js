import express from 'express';
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { inventarios } from "../controllerTS/inventarios.js";

const proxyinventarios = express();
proxyinventarios.use((req, res, next) => {
    try {
        let data = plainToClass(inventarios, Object.assign(req.query, req.body), { excludeExtraneousValues: true });
        req.body = JSON.parse(JSON.stringify(data));
        console.log(req.body);
        next();
    } catch (err) {
        res.status(err.status).send(err);
    }
})
export default proxyinventarios;