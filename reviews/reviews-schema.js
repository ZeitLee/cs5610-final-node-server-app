import mongoose from "mongoose";
const reviewsSchema = new mongoose.Schema(
    {
        text: String,
        gameId: Number,
        gameName: String,
        gameIcon: String,
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    },
    { collection: "reviews" }
);
export default reviewsSchema;