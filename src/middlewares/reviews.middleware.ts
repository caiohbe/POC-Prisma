import { reviewSchema, scoreSchema }from "../schemas/review.schema.js";
import { NextFunction, Request, Response } from "express";
import Review from "../protocols/Review.js";
import reviewsRepository from "../repositories/reviews.repository.js";

export async function validateReview(req: Request, res: Response, next: NextFunction) {
    const newReview: Review = req.body
    const { error } = reviewSchema.validate(newReview)

    if (error) {
        res.status(400).send({
            message: error.message
        })
        return
    }

    try {
        const { movieId, reviewerId } = newReview
        const reviewExist = (await reviewsRepository.findSpecificReview(movieId, reviewerId)).rows[0]

        if (reviewExist) {
            res.sendStatus(409)
            return
        }

    } catch(err) {
        res.status(500).send(err.message)
        return
    }

    next()
}

export async function validateReviewParams(req: Request, res: Response, next: NextFunction) {
    const id: Number = +req.params.id

    try {
        const targetedReview = (await reviewsRepository.findReviewById(id)).rows[0]
        if (!targetedReview) {
            res.sendStatus(404)
            return
        }
    } catch (err) {
        res.status(500).send(err.message)
    }
    
    next()
}

export async function validateReviewQuery(req: Request, res: Response, next: NextFunction) {
    const id: Number = +req.query.id

    if (id) {
        try {
            const targetedReview = (await reviewsRepository.findReviewById(id)).rows[0]
            if (!targetedReview) {
                res.sendStatus(404)
                return
            }
        } catch (err) {
            res.status(500).send(err.message)
        }
    }    
    
    next()
}

export async function validateScoreUpdate(req: Request, res: Response, next: NextFunction) {
    const { error } = scoreSchema.validate(req.body)

    if (error) {
        res.status(400).send({
            message: error.message
        })
        return
    }

    next()
}