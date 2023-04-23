import mongoose from "mongoose";
const followsSchema = new mongoose.Schema(
    {
        followerId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        followedId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }
    },
    { collection: "follows" }
);
export default followsSchema;