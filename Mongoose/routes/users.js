const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// CRUD operation

// View/Read

router.get("/users", async(req, res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

// Create

router.post("/users", async(req, res)=>{
    try{
        const {name, age, weight} = req.body;
        const newUser = new User({name, age, weight});
        await newUser.save();
        res.status(200).json({success: true, user: newUser})
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

// Update
router.put("/users/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        const {name, age, weight} = req.body;
        await User.findByIdAndUpdate(id, {name, age, weight});
        
        res.status(200).json({
            success: true,
            message: `user id - ${id} deleted from the database`
        })
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

// Delete
router.delete("/users/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        const {name, age, weight} = req.body;
        const updatedUser = await User.findByIdAndDelete(id, {name, age, weight});
        if(!updatedUser){
            res.send({
                message: "User Not Found"
            })
        }
        res.status(200).json({
            success: true,
            user: updatedUser
        })
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

module.exports = router;