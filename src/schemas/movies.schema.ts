import Joi from "joi"

const movieSchema = Joi.object({
    title: Joi.string().required()
})

export default movieSchema