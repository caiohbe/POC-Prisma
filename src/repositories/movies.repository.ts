import connectionDB from "../database/db.js";
import { Movie } from "../protocols/Movie.js";

function findMovies() {
    return connectionDB.query<Movie[]>(`
        SELECT * FROM movies;
    `)
}

function findMovieById(id: Number) {
    return connectionDB.query<Movie[]>(`
        SELECT * FROM movies WHERE id=$1;
    `, [id])
}

function findMovieByTitle(title: String) {
    return connectionDB.query<String>(`
        SELECT * FROM movies WHERE title=$1;
    `, [title])
}

function insertMovie(title: String) {
    connectionDB.query(`
        INSERT INTO movies (title) VALUES ($1);
    `, [title])
}

const moviesRepository = {
    findMovies,
    findMovieById,
    findMovieByTitle,
    insertMovie
}

export default moviesRepository