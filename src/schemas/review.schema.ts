import Joi from "joi"

export const reviewSchema = Joi.object({
    movieId: Joi.number().required(),
    reviewerId: Joi.number().required(),
    score: Joi.number().required()
})

export const scoreSchema = Joi.object({
    score: Joi.number().required()
})