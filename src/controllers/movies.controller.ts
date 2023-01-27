import { Request, Response } from "express";
import { Movie } from "../protocols/Movie.js";
import moviesService from "../services/movies.service.js";

export async function getMovies(req: Request, res: Response) {
    const id: Number = +req.query.id
    
    try {
        const movies = await moviesService.getMoviesById(id)
        res.send(movies)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function postMovie(req: Request, res: Response) {
    const newMovie: Movie = req.body

    try {
        moviesService.postMovie(newMovie)
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}