const http = require('http');
const app = require('./app');
require('dotenv').config({path: './vars.env'});
const server = http.createServer(app);

const port = 3000;
server.listen(process.env.PORT_NUMBER)
