import mongoose from "mongoose";
const membersSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        clubId: { type: mongoose.Schema.Types.ObjectId, ref: "clubs" }
    },
    { collection: "members" }
);
export default membersSchema;