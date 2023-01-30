import Review from "../protocols/Review.js"
import reviewsRepository from "../repositories/reviews.repository.js"

async function postReview(review: Review) {
    const { movieId, reviewerId, score } = review
    await reviewsRepository.insertReview(movieId, reviewerId, score)
}

async function deleteReview(id: number) {
    await reviewsRepository.deleteReviewById(id)
}

async function updateReview(score: number, id: number) {
    await reviewsRepository.updateReviewById(score, id)
}

async function getReviews(id: number) {
    if (id) {
        const review = (await reviewsRepository.findReviewById(id))
        return review
    } else {
        const reviews = (await reviewsRepository.findReviews())
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