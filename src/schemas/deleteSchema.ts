import Joi from "../../node_modules/joi/lib/index.js"

const deleteSchema = Joi.object({
    id:Joi.number().min(1).required()
})
export default deleteSchema;