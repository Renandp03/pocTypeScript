import express, { json } from 'express';
import postRoutes from './routes/postRoutes.js';
import postControllers from './controllers/postControllers.js';



const server = express();
server.use(json());
server.use(postRoutes)

const port = process.env.PORT || 5000;

server.listen(port,() => console.log(`server is runing in port: ${port}`));