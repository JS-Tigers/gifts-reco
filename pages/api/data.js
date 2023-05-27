import mongoose from "mongoose";
import Product from "../../models/product";

const connectMongoDB = async () => {
  return await mongoose
    .connect(process.env.MONGODB_URL, { dbName: "mv-hackathon", useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => Promise.resolve(true))
    .catch((error) => Promise.reject(error));
};

export default async function data(req, res) {
  if (req.method == "GET") {
    res.status(200).json({ status: "working" });
  } else if (req.method == "POST") {
    const { gender, age, likes, dislikes } = req.body;

    if (gender && age) {
      await connectMongoDB();

      let products = await Product.find({
        gender: gender == "both" ? { $ne: null } : { $regex: new RegExp(gender, "i") },
        age: age == "all" ? { $ne: null } : { $regex: age == 1 ? /(^|,)\s*1\s*(?=,|$)/i : new RegExp(age, "i") },
        currency_symbol: "$",
        $or: [
          {
            $and: [
              { brands: Boolean(likes.length) ? { $regex: new RegExp(likes.join("|"), "i") } : { $ne: null } },
              { brands: Boolean(dislikes.length) ? { $not: new RegExp(dislikes.join("|"), "i") } : { $ne: null } },
            ],
          },
          {
            $and: [
              { categories: Boolean(likes.length) ? { $regex: new RegExp(likes.join("|"), "i") } : { $ne: null } },
              { categories: Boolean(dislikes.length) ? { $not: new RegExp(dislikes.join("|"), "i") } : { $ne: null } },
            ],
          },
          {
            $and: [
              { characters: Boolean(likes.length) ? { $regex: new RegExp(likes.join("|"), "i") } : { $ne: null } },
              { characters: Boolean(dislikes.length) ? { $not: new RegExp(dislikes.join("|"), "i") } : { $ne: null } },
            ],
          },
          {
            $and: [
              { tags: Boolean(likes.length) ? { $regex: new RegExp(likes.join("|"), "i") } : { $ne: null } },
              { tags: Boolean(dislikes.length) ? { $not: new RegExp(dislikes.join("|"), "i") } : { $ne: null } },
            ],
          },
        ],
      });

      products.sort((a, b) => {
        if (a.ratings_total * a.average_rating > b.ratings_total * b.average_rating) {
          return -1;
        } else if (a.ratings_total * a.average_rating < b.ratings_total * b.average_rating) {
          return 1;
        }

        return 0;
      });

      if (products.length > 3) {
        products = products.slice(0, 3);
      }

      res.status(200).json(products);
    } else {
      res.status(400).json("Bad Request");
    }
  } else {
    res.status(400).json("Bad Request");
  }
}
