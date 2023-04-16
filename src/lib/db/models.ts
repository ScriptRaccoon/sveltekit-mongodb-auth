import mongoose from "mongoose";

const User_Schema = new mongoose.Schema({
	email: { type: String, required: [true, "is required"], unique: true },
	password: { type: String, required: [true, "is required"] }
});

export const User_Model = mongoose.model("User", User_Schema);
