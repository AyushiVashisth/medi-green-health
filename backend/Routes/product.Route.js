const express = require("express");
const ProductModel = require("../models/product.model");
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const query = req.query;
  const categoryQuery = {};
  if (query.category) {
    categoryQuery["category"] = query.category;
  }
  let sortQuery = {};
  const discountQuery = {};
  if (query.sortBy === "price") {
    if (query.order === "asc") {
      sortQuery = { price: 1 };
    } else if (query.order === "des") {
      sortQuery = { price: -1 };
    }
  } else if (query.sortBy === "rating") {
    if (query.order === "asc") {
      sortQuery = { rating: 1 };
    } else if (query.order === "des") {
      sortQuery = { rating: -1 };
    }
  }

  if (query.discount) {
    const [greaterThanEqual, lessThanEqual] = query.discount.split("-");
    discountQuery["discount-percent"] = {
      $gte: `${greaterThanEqual}%`,
      $lte: `${lessThanEqual}%`,
    };
  }
  try {
    const notes = await ProductModel.find({
      $and: [categoryQuery, discountQuery],
    }).sort(sortQuery);
    res.status(200).send(notes);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

productRouter.post("/add", async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    res.status(200).send({
      message: "Product successfully created",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

productRouter.patch("/update/:productId", async (req, res) => {
  const id = req.params.productId;
  const changes = req.body;
  try {
    const new_note = await ProductModel.findByIdAndUpdate({ _id: id }, changes);
    res.status(200).send({
      message: "Note successfully updated",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

productRouter.delete("/delete/:productId", async (req, res) => {
  const id = req.params.productId;
  const prod = await ProductModel.findOne({ _id: id });
  try {
    const product = await ProductModel.findByIdAndDelete({ _id: id });
    res.status(200).send({
      message: "Product successfully deleted",
      product,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

module.exports = productRouter;
