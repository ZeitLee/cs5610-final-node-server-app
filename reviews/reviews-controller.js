import * as reviewsDao from "./reviews-dao.js";

const ReviewController = (app) => {

    const findAllReviews = async (req, res) => {
        const reviews = await reviewsDao.findAllReviews();
        res.json(reviews);
    }

    const findReviewByGameId = async (req, res) => {
        const reviews = await reviewsDao.findReviewByGameId(req.params.gameId);
        res.json(reviews);
    }

    const findReviewByUserId = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(403);
            return;
        }
        const reviews = await reviewsDao.findReviewByUserId(currentUser._id);
        res.send(reviews);
    }

    const createReview = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(403);
            return;
        }
        const newReview = await reviewsDao.createReview(req.body);
        res.json(newReview);
    }

    const updateReview = async (req, res) => {
        const reviewId = req.params.reviewId;
        const status = await reviewsDao.updateReview(reviewId, req.body);
        res.send(status);
    }

    const deleteReview = async (req, res) => {
        const reviewId = req.params.reviewId;
        const status = await reviewsDao.deleteReview(reviewId, req.body);
        res.send(status);
    }

    app.get("/api/reviews", findAllReviews);
    app.get("/api/reviews/games/:gameId", findReviewByGameId);
    app.get("/api/reviews/users/:userId", findReviewByUserId);
    app.post("/api/reviews", createReview);
    app.put("/api/reviews/:reviewId", updateReview);
    app.delete("./api/reviews/:reviewId", deleteReview);
};
export default ReviewController;