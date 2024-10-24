import { Schema, model, models } from "mongoose";

const PortfolioSchema = new Schema({
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
    default: false,
  },
  description: {
    type: String,
  },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  seo_title: {
    type: String,
  },
  meta_description: {
    type: String,
  },
  images: [{ type: String }],
});

const Portfolio = models.Portfolio || model("Portfolio", PortfolioSchema);

export default Portfolio;
