
const express = require("express");
const router = express.Router();

//Insertmodel
const User =require("../Model/Usermodel");
////InsertUSerControl
const UserController = require("../Controllers/Usercontroller");

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getById);
router.put("/:id",UserController.updateUser);
router.delete("/:id",UserController.DeleteUser);


//export
module.exports =router;