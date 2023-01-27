import { Router } from "express";
import { deleteReview, getReviews, postReview, updateReview } from "../controllers/reviews.controller.js";
import { validateReview, validateReviewParams, validateReviewQuery, validateScoreUpdate } from "../middlewares/reviews.middleware.js";

const router = Router()

router.get("/reviews", validateReviewQuery, getReviews)
router.post("/review", validateReview, postReview)
router.delete("/review/:id", validateReviewParams, deleteReview)
router.patch("/review/:id", validateReviewParams, validateScoreUpdate, updateReview)


export default router