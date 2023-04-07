import Joi from "joi"

const deleteSchema = Joi.object({
    id:Joi.number().min(1).required()
})
export default deleteSchema;