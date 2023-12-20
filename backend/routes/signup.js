const express=require("express");
const router=express.Router();
const mongoose=require("mongoose")
const bcrypt = require("bcrypt")

const users=require("../models/userSchema")
mongoose.connect("mongodb://localhost/Appdata")

router.post("/register",async (req, res) => {
    try {
        const { email,password,Cpassword } = req.body;
        bcrypt.hash(password, 10, async function (err, hash) {
            if (err) {
                res.status(500).json({
                    status: "failed",
                    message: err.message
                })
            }
                        const data = await users.create({
                 email,
                password: hash,
                Cpassword
            });
            res.json({
                status: "success",
                message: "registration successful",
                data
            })
        })
    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})




module.exports=router