import Joi from "../../node_modules/joi/lib/index.js"

const updateSchema = Joi.object({
    id:Joi.number().min(1).required(),
    text:Joi.string().max(200).required()
})
export default updateSchema