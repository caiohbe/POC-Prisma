import connectionDB from "../database/db.js";

function findSpecificReview(movieId: Number, reviewerId: Number) {
    return connectionDB.query(`
        SELECT "movieId", "reviewerId" FROM reviews WHERE "movieId"=$1 AND "reviewerId"=$2;
    `,[movieId, reviewerId])
}

function findReviewById(id: Number) {
    return connectionDB.query(`
        SELECT * FROM reviews WHERE id=$1;
    `,[id])
}

function findReviews() {
    return connectionDB.query(`
        SELECT * FROM reviews;
    `,[])
}

function insertReview(movieId: Number, reviewerId: Number, score: Number) {
    return connectionDB.query(`
        INSERT INTO reviews ("movieId", "reviewerId", score) VALUES ($1, $2, $3);
    `, [movieId, reviewerId, score])
}

function deleteReviewById(id: Number) {
    connectionDB.query(`
        DELETE FROM reviews WHERE id=$1;
    `, [id])
}

function updateReviewById(score: Number, id: Number) {
    return connectionDB.query(`
        UPDATE reviews SET score=$1 WHERE id=$2;
    `, [score, id])
}

const reviewsRepository = {
    findReviewById,
    findReviews,
    findSpecificReview,
    insertReview,
    deleteReviewById,
    updateReviewById
}

export default reviewsRepository