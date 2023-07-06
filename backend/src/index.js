import appExpress from "./app.js";
import config from "./config.js";

const main = () => {
    appExpress.listen(config.server, () => console.log(`http://${config.server.hostname}:${config.server.port}`));
    console.log(`Company's Server is running on port ${config.server.port}`);
}

main();