const express=require("express");
const router=express.Router();


//insert Model
const User=require("../../Model/Accommodation/userModel");

//Insert user controller
const userControler = require("../../Controllers/Accommodation/userControlers");

// Define routes
router.get("/",userControler.getAllUsers);
router.post("/",userControler.addUsers);
router.get("/:id",userControler.getById);
router.put("/:id",userControler.updateUser);
router.delete("/:id",userControler.deleteUser);



//export
module.exports=router;
