import mongoose from "mongoose";
const clubsSchema = new mongoose.Schema(
    {
        name: String,
        intro: String,
    },
    { collection: "club" }
);
export default clubsSchema;