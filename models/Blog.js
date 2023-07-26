import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
    },
    description: {
      type: String,
    },
    bodyimages: [{ type: String }],
    category: {
      type: mongoose.Types.ObjectId,
      ref: "BlogCategory",
    },
    seo_title: {
      type: String,
    },
    meta_description: {
      type: String,
    },
    images: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose?.models?.Blog || mongoose.model("Blog", BlogSchema);
