
const mongoose = require('mongoose')

const vitSchema = mongoose.Schema(
    {

        image1: { type: String, required: true },
        image2: { type: String, required: true },
        image3: { type: String, required: true },
        price: { type: Number, required: true },
        rating: { type: Number, required: true },
        title: { type: String, required: true },
        discount: { type: Number, required: true },
        category: { type: String, required: true }

    }
)
const VitModel=mongoose.model("vitamins",vitSchema);
module.exports=VitModel;