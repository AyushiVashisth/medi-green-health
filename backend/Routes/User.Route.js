
const express = require('express');
require('dotenv').config()
const userRouter = express.Router()

//user model
const UserModel = require("../models/User.Model")

//bcrypt for hashing the password
const bcrypt = require('bcrypt');

//JWT token for authentication
const jwt = require('jsonwebtoken')

//Registration
userRouter.post("/register", async (req, res) => {
    try {
        let { email, mobile, password } = req.body
        let user = await UserModel.findOne({ email })

        if (user) {
            res.status(200).send({ "msg": "User already registered on this email,Login now!!" })
        } else {
            bcrypt.hash(password, 6, async function (err, hash) {
                const user = new UserModel({ ...req.body, password: hash })
                await user.save()
                res.status(200).send({ "msg": "Registration Successfull,Login Now!!" })
            });
        }
    } catch (error) {
        console.log("unable to register the new user")
        res.status(400).send({ "err": error.message })
    }
})
//login 
userRouter.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await UserModel.findOne({ email })
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {                  
                    var token = jwt.sign({ userID:user._id }, `${process.env.secretKey}`);
                    res.status(200).send({"msg":"Login Successfull",name:user.name,token})
                } else {
                    res.status(200).send({ "msg": "Wrong Password !!" })
                }
            })
        } else {
            res.status(200).send({ "msg": "Email doesn't exist,Signup First!!" })
        }
    } catch (error) {
        console.log("unable to Login the new user")
        res.status(400).send({ "err": error.message })
    }

})


module.exports = userRouter