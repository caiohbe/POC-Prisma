import { Router } from "express";
import { getMovies, postMovie } from "../controllers/movies.controller.js";
import { validateMovie, validateMovieQuery } from "../middlewares/movies.middleware.js";

const router = Router()

router.get("/movies", validateMovieQuery, getMovies)
router.post("/movie", validateMovie, postMovie)

export default router