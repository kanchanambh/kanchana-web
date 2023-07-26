import mongoose from "mongoose";

const BlogCategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  parent: { type: mongoose.Types.ObjectId, ref: "BlogCategory" },
});

export default mongoose?.models?.BlogCategory ||
  mongoose.model("BlogCategory", BlogCategorySchema);
