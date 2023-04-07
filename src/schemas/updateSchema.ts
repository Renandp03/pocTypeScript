import Joi from "joi"

const updateSchema = Joi.object({
    id:Joi.number().min(1).required(),
    text:Joi.string().max(200).required()
})
export default updateSchema