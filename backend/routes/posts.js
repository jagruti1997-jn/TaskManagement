const express = require("express");
const router = express.Router()
const Task=require("../models/taskSchema");
const taskSchema = require("../models/taskSchema");


//post

router.post("/" ,async (req, res) => {
   
    const posts = await Task.create({
        task: req.body.task,
        user: req.user
});
    res.json({
        status: "success",
        posts:posts,
        postsId:posts._id

    
    })
})



//get

router.get("/", async (req, res) => {


    try{
        const posts = await Task.find({ user: req.user });
        
        res.json({
            status: "success",
            posts:posts
        })
    }catch(e){
        res.status(500).send({
            status:"failed",
            message: e.message
          
        })  
    }
  
})



//delete

router.delete("/:id", async (req, res) => {
    
    try {
        const posts = await Task.deleteOne({ _id: req.params.id });
        res.json({
            status: "success",
            posts:posts
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

})



//put 


router.put("/editpage/:id", async (req, res)  => {
    try {
        
        const posts = await Task.updateMany({ _id: req.params.id },
           { $set: { task: req.body.task }});
        res.json({
            status: "success",
            posts:posts,
            postsId:posts._id
               })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

})

    

module.exports=router;