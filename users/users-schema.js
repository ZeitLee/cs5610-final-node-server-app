import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        firstname: String,
        lastname: String,
        dob: Date,
        email: String,
        role: {
            type: String,
            default: "user",
            enum: ["admin", "user", "guest", "moderator"],
        },
        createdAt: { type: Date, default: Date.now },
        isAdmin: { type: Boolean, default: false },
    },
    { collection: "users" }
);
export default usersSchema;