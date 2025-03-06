const express = require('express')
const app = express()
const port = 5000


app.get("/", (req, res)=>{
    // res.send("got a GET request");
    res.sendFile("./dummy.html", {root: __dirname})
})

app.post("/items", (req, res) =>{
    res.send("got a POST request")
})

app.put("/items/:id", (req, res) =>{
    res.send("got a PUT request")
})

app.delete("/items/:id", (req, res) =>{
    res.send("got a DELETE request")
})

app.listen(port, () => {
  console.log(`Dinar's app listening on port ${port}`)
})