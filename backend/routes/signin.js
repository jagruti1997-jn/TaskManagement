const express = require("express");
const bcrypt = require("bcrypt")
const users=require("../models/userSchema")
const router = express.Router()
const jwt=require("jsonwebtoken")
const secret='RESTAPI'
router.post("/login",async (req, res) => {
    try {
        const {email, password } = req.body;
        const data=await users.findOne({email})
        if(!data){
            return res.status(400).json({
                status:"failed",
                message: "user is not registered"
            })
        }
        bcrypt.compare(password,data.password,function(err,result){ 
                if(err){
                    res.status(500).json({
                        status: "failed",
                        message: err.message
                    })
                }
                if(result){
                    const token=jwt.sign({
                        exp: Math.floor(Date.now()/1000)+(60*60),
                        user:data._id
                    },secret)
                    res.json({
                        status :  "success" ,
                        token,
                        people:data.id
                    })
                }
               
        })
       
    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }



})
module.exports = router;