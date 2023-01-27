import { Request, Response } from "express";
import Review from "../protocols/Review.js";
import reviewsService from "../services/reviews.service.js";


export async function postReview(req: Request, res: Response) {
    const newReview: Review = req.body

    try {
        await reviewsService.postReview(newReview)
        res.sendStatus(201) 
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function deleteReview(req: Request, res: Response) {
    const id: Number = +req.params.id

    try {
        reviewsService.deleteReview(id)
        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function updateReview(req: Request, res: Response) {
    const score: Number = +req.body.score
    const id: Number = +req.params.id
    
    try {
        await reviewsService.updateReview(score, id)
        res.sendStatus(204)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getReviews(req: Request, res: Response) {
    const id: Number = +req.query.id

    try {
        const reviews = await reviewsService.getReviews(id)
        res.send(reviews)
    } catch (err) {
        res.status(500).send(err.message)
    }
}