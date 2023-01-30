import { Movie } from "../protocols/Movie.js"
import moviesRepository from "../repositories/movies.repository.js"

async function getMoviesById(id: number) {  
    if (!id) {
        const movies = (await moviesRepository.findMovies())
        return movies
    } else {
        const movie = (await moviesRepository.findMovieById(id))
        return movie
    }
}

async function postMovie(movie: Movie) {
    const movieTitle = movie.title
    console.log(movieTitle)
    
    await moviesRepository.insertMovie(movieTitle)
}

const moviesService = {
    getMoviesById,
    postMovie
}

export default moviesService