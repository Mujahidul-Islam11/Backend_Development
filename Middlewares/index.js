const express = require("express");
const app = express();
const port = 5000;

// in built middleware
app.use(express.json())
const route = require("./routes/route")

// const loggingMiddleware = (req, res, next)=>{
// console.log("log korchi");
// next();
// }

// const authMiddleware = (req, res, next)=>{
//     console.log("auth korchi");
    // res.send("Colo fherot colo")
    // next();
// }

// const validationMiddleware = (req, res, next)=>{
//     console.log("validation korchi");
//     next();
// }

// use middlewares on app
// app.use(loggingMiddleware);
// app.use(authMiddleware);
// app.use(validationMiddleware);

app.use("/api", route)

app.get("/", (req, res)=>{
    console.log(req.body)
    res.send("Hello middlewares")
});

app.listen(port, ()=>{
    console.log(`middleware server running on port ${port}`)
})