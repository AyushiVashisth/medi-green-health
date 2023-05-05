

const express = require('express');

const CartModel = require("../models/CartModel");


const cartRouter = express.Router();

const auth = require("../middlewares/Authtentication");


//get
cartRouter.get("/cart", auth, async (req, res) => {
    try {
        const data = await CartModel.find({ userID: req.body.userID })
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({ "err": error.message })

    }
})
//post means add to Cart
cartRouter.post("/add", async (req, res) => {
    try {
        let cart = new CartModel(req.body)
        await cart.save()
    } catch (error) {
        res.status(400).send({ "message": error.message })
    }
})
//update
cartRouter.patch("/update/:id", async (req, res) => {
    const id = req.params.id

    try {
        const item = await CartModel.findByIdAndUpdate({ _id: id }, req.body)
        res.status(200).send({
            "message": "Product updated successfully",
            item
        })
    } catch (error) {
        res.status(400).send({ "message": error.message })
    }
})
//delete
cartRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    try {
        const item = await CartModel.findByIdAndDelete({ _id: id })
        res.status(200).send({
            "message": "Product deleted successfully",
            item
        })
    } catch (error) {
        res.status(400).send({ "message": error.message })
    }
})
module.exports=cartRouter
