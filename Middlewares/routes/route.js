const express = require("express");
const router = express.Router();

// specific route middlewares
const auth = (req, res, next) => {
  console.log("auth middleware");
  req.user = { userId: 23, role: "admin" };

  if (req.user) {
    next();
  } else {
    res.json({
      success: false,
      message: "user not valid",
    });
  }
};

const isStudent = (req, res, next)=>{
    if(req.user.role === "student"){
        next();
    }else{
        res.json({
            success: false, 
            message: "Access denied: only students can access this route"
        })
    }
}

const isAdmin = (req, res, next)=>{
    if(req.user.role === "admin"){
        next();
    }else{
        res.json({
            success: false,
            message: "Access denied: only admin can access this route"
        })
    }
}

// routes
router.get("/student", auth, isStudent, (req, res)=>{
    res.send("specific student page");
})

router.get("/admin", auth, isAdmin, (req, res)=>{
    res.send("admin page");
})

module.exports = router;
