import prisma from "../database/db.js";

function findMovies() {
    // return connectionDB.query<Movie[]>(`
    //     SELECT * FROM movies;
    // `)

    return prisma.movies.findMany()
}

function findMovieById(id: number) {
    // return connectionDB.query<Movie[]>(`
    //     SELECT * FROM movies WHERE id=$1;
    // `, [id])

    return prisma.movies.findFirst({
        where: {
            id
        }
    })
}

function findMovieByTitle(title: string) {
    // return connectionDB.query<String>(`
    //     SELECT * FROM movies WHERE title=$1;
    // `, [title])

    return prisma.movies.findFirst({
        where: {
            title
        }
    })
}

function insertMovie(title: string) {
    // connectionDB.query(`
    //     INSERT INTO movies (title) VALUES ($1);
    // `, [title])

    return prisma.movies.create({
        data: {
            title
        }
    })
}

const moviesRepository = {
    findMovies,
    findMovieById,
    findMovieByTitle,
    insertMovie
}

export default moviesRepository