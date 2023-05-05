

const express = require('express');

const vitRouter = express.Router();

const VitModel = require("../models/vitamin.Model")


//post request
vitRouter.post("/add", async (req, res) => {
    try {
        const vitamin = new VitModel(req.body)
        await vitamin.save();
        res.status(200).send({ "msg": "New Vitamin product added successfully" })
    } catch (error) {
        res.status(400).send({ "err": error.message })
    }
})
//Delete
vitRouter.delete("/delete/:id", async (req, res) => {
    let id = req.params.id
    try {
        await VitModel.findByIdAndDelete({ _id: id })

        res.status(200).send({ "msg": "Product deleted" })
    } catch (error) {
        res.status(400).send({ "err": error.message })
    }
})
//update
vitRouter.patch("/update/:id", async (req, res) => {
    let id = req.params.id
    try {
        await VitModel.findByIdAndUpdate({ _id: id }, req.body)

        res.status(200).send({ "msg": "Product details updated" })
    } catch (error) {
        res.status(400).send({ "err": error.message })
    }
})
//get Data
vitRouter.get("/", async (req, res) => {    
    const query = req.query;
    const category = {};
    if (query.category) {
        category["category"] = query.category;
    }

    let sortQuery = {};

    if (query.sortBy === "price") {
        if (query.order === "asc") {
            sortQuery = { price: 1 };
        } else if (query.order === "desc") {
            sortQuery = { price: -1 };
        }
    }

    try {
        vitamin = await VitModel.find({
            $and: [category],
        }).sort(sortQuery)
        res.status(200).send(vitamin)
    } catch (error) {
        res.status(400).send({ "err": error.message })

    }
})
vitRouter.get("/:id",async(req,res)=>{
 try {
    let id=req.params.id
    const data=await VitModel.findById({_id:id})
    res.status(200).send(data)
 } catch (error) {
    res.status(400).send({ "err": error.message })

 }
})
module.exports = vitRouter