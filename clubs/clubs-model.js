import mongoose from "mongoose";
import clubsSchema from "./clubs-schema.js";
const clubsModel = mongoose.model("clubs", clubsSchema);
export default clubsModel;