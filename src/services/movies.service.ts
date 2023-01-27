import moviesRepository from "../repositories/movies.repository.js"
import { Movie } from "../protocols/Movie.js"

async function getMoviesById(id: Number) {  
    if (!id) {
        const movies = (await moviesRepository.findMovies()).rows
        return movies
    } else {
        const movie = (await moviesRepository.findMovieById(id)).rows[0]
        return movie
    }
}

function postMovie(movie: Movie) {
    const movieTitle = movie.title
    moviesRepository.insertMovie(movieTitle)
}

const moviesService = {
    getMoviesById,
    postMovie
}

export default moviesService