import Joi from "../../node_modules/joi/lib/index.js";
var postSchema = Joi.object({
    owner: Joi.string().min(2).required(),
    text: Joi.string().max(200)
});
export default postSchema;
