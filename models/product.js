import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  gender: String,
  age: String,
  category: String,
  platform: String,
  product_name: String,
  image_link: String,
  currency_symbol: String,
  price: Number,
  delivery_tagline: String,
  delivery_days: Number,
  average_rating: Number,
  buy_link: String,
  ratings_total: Number,
  product_id: String,
  last_updated_on: Number,
  brands: String,
  categories: String,
  characters: String,
  tags: String,
  age_ai: String,
  genders_ai: String,
});

const Product = models.Product || model("Product", productSchema);

export default Product;
