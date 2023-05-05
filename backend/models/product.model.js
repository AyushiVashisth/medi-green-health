const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: String,
    src: String,
    packsize: String,
    price: Number,
    "discount-percent": String,
    maxQty: Number,
    rating: String,
    CardRatingDetail: String,
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
