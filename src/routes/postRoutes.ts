import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import postSchema from "../schemas/postSchema.js";
import updateSchema from "../schemas/updateSchema.js";
import deleteSchema from "../schemas/deleteSchema.js";
import postControllers from "../controllers/postControllers.js";

const postRoutes = Router();

postRoutes.get("/get",postControllers.list);
postRoutes.post("/post",validateSchema(postSchema),postControllers.post);
postRoutes.put("/put",validateSchema(updateSchema),postControllers.update);
postRoutes.delete("/delete",validateSchema(deleteSchema),postControllers.deletePost);

export default postRoutes;