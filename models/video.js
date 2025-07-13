import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  url: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Video", videoSchema);
