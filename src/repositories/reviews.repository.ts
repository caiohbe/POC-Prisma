import prisma from "../database/db.js"

function findSpecificReview(movieId: number, reviewerId: number) {
    // return connectionDB.query(`
    //     SELECT "movieId", "reviewerId" FROM reviews WHERE "movieId"=$1 AND "reviewerId"=$2;
    // `,[movieId, reviewerId])

    return prisma.reviews.findFirst({
        where: {
            movieId,
            reviewerId
        }
    })
}

function findReviewById(id: number) {
    // return connectionDB.query(`
    //     SELECT * FROM reviews WHERE id=$1;
    // `,[id])

    return prisma.reviews.findFirst({
        where: {
            id
        }
    })
}

function findReviews() {
    // return connectionDB.query(`
    //     SELECT * FROM reviews;
    // `,[])

    return prisma.reviews.findMany()
}

function insertReview(movieId: number, reviewerId: number, score: number) {
    // return connectionDB.query(`
    //     INSERT INTO reviews ("movieId", "reviewerId", score) VALUES ($1, $2, $3);
    // `, [movieId, reviewerId, score])

    return prisma.reviews.create({
        data: {
            score,
            reviewerId,
            movieId
        }
    })
}

function deleteReviewById(id: number) {
    // connectionDB.query(`
    //     DELETE FROM reviews WHERE id=$1;
    // `, [id])

    return prisma.reviews.delete({
        where: {
            id
        }
    })
}

function updateReviewById(score: number, id: number) {
    // return connectionDB.query(`
    //     UPDATE reviews SET score=$1 WHERE id=$2;
    // `, [score, id])

    return prisma.reviews.update({ 
        where: {
            id
        },
        data: {
            score
        }
    })
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