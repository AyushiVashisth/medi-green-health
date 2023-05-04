

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
vitRouter.update("/update/:id", async (req, res) => {
    let id = req.params.id
    try {
        await VitModel.findByIdAndUpdate({ _id: id }, req.body)

        res.status(200).send({ "msg": "Product details updated" })
    } catch (error) {
        res.status(400).send({ "err": error.message })
    }
})
//get Data
vitRouter.get("/:id?", async (req, res) => {
    let id = req.params.id;

    try {
        let vitamin;
        if (id) {
            vitamin = await VitModel.findById({ _id, id });
        } else {
            vitamin = await VitModel.find()
        }



        res.status(200).send(vitamin)
    } catch (error) {
        res.status(400).send({ "err": error.message })

    }
})