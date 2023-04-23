import reviewsModel from "./reviews-model.js";

export const findAllReviews = async () => {
    return await reviewsModel.find();
}

export const findReviewByUserId = async (userId) => {
    return await reviewsModel.find({ userId: userId });
}

export const findReviewByGameId = async (gameId) => {
    return await reviewsModel.find({ gameId: gameId });
}


export const createReview = async (review) => {
    return await reviewsModel.create(review);
}


export const updateReview = async (rid, review) => {
    return await reviewsModel.updateOne({ _id: rid }, { $set: review });
}


export const deleteReview = async (rid) => {
    return await reviewsModel.deleteOne({ _id: rid });
}
