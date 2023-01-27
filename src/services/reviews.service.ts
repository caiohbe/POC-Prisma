import Review from "../protocols/Review.js"
import reviewsRepository from "../repositories/reviews.repository.js"

async function postReview(review: Review) {
    const { movieId, reviewerId, score } = review
    await reviewsRepository.insertReview(movieId, reviewerId, score)
}

function deleteReview(id: Number) {
    reviewsRepository.deleteReviewById(id)
}

async function updateReview(score: Number, id: Number) {
    await reviewsRepository.updateReviewById(score, id)
}

async function getReviews(id: Number) {
    if (id) {
        const review = (await reviewsRepository.findReviewById(id)).rows[0]
        return review
    } else {
        const reviews = (await reviewsRepository.findReviews()).rows
        return reviews
    }
}

const reviewsService = {
    postReview,
    deleteReview,
    updateReview,
    getReviews
}

export default reviewsService