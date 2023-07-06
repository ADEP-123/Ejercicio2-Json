import express from "express";
import dotenv from "dotenv";
import testBackCampus from './routers/testBack.js'

dotenv.config();
const appExpress = express();

appExpress.use("/testBack",testBackCampus);

const config = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, () => console.log(`http://${config.hostname}:${config.port}`));

export default appExpress;