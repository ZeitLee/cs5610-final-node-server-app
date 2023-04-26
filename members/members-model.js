import mongoose from "mongoose";
import membersSchema from "./members-schema.js";
const membersModel = mongoose.model("members", membersSchema);
export default membersModel;