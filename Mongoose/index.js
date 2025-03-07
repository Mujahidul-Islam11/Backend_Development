const express = require("express");
const app = express();
const connectDB = require("./db");
const port = 5000
const users = require("./routes/users");

app.use(express.json());
// connect to database
connectDB();

app.use("/api", users);

app.get("/", (req, res)=>{
res.send("Hello mongoose");
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})