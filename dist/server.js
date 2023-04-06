import express, { json } from 'express';
import postRoutes from './routes/postRoutes.js';
var server = express();
server.use(json());
server.use(postRoutes);
var port = process.env.PORT || 5000;
server.listen(port, function () { return console.log("server is runing in port: ".concat(port)); });
