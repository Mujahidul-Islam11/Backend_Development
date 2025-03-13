const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { loadUsers, insertUsers, updateUsers, deleteUsers } = require("../controller/usersController");

// CRUD operation

// View/Read
router.get("/users", loadUsers);

// Create
router.post("/users", insertUsers);

// Update
router.put("/users/:id", updateUsers);

// Delete
router.delete("/users/:id", deleteUsers);

module.exports = router;