const express = require("express");
const router = express.Router();

// Import Profilecontroller
const Profilecontroller = require("../Controllers/Profilecontroller");

// Define routes
router.get("/", Profilecontroller.getAllUsers);
router.post("/", Profilecontroller.addUsers);
router.get("/:id",Profilecontroller.getById);
router.put("/:id",Profilecontroller.updateUser);
router.delete("/:id",Profilecontroller.DeleteUser);

// Export router
module.exports = router;
