const express = require('express')
const router = express.Router()

router.get("/", (req, res)=>{
    res.send("got a GET request");
    // res.sendFile("../dummy.html", {root: __dirname})
})

router.post("/items", (req, res) =>{
    res.send("got a POST request")
})

router.put("/items/:id", (req, res) =>{
    res.send("got a PUT request")
})

router.delete("/items/:id", (req, res) =>{
    res.send("got a DELETE request")
})

module.exports = router