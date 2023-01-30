import { NextFunction, Request, Response } from "express";
import movieSchema from "../schemas/movies.schema.js";
import moviesRepository from "../repositories/movies.repository.js";
import { Movie } from "../protocols/Movie.js";


export async function validateMovie(req: Request, res: Response, next: NextFunction) {
    const newMovie: Movie = req.body
    const { error } = movieSchema.validate(newMovie)

    if (error) {
        res.status(400).send({
            message: error.message
        })
        return
    }

    try {
        const targetedMovie = (await moviesRepository.findMovieByTitle(newMovie.title))

        if (targetedMovie) {
            res.sendStatus(409)
            return
        }

    } catch (err) {
        res.status(500).send(err.message)
    }

    next()
}

export async function validateMovieQuery(req: Request, res: Response, next: NextFunction) {
    const id = +req.query.id

    if (id) {
        try {
            const targetedReview = (await moviesRepository.findMovieById(id))
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