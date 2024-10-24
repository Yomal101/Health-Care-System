const express = require("express");
const router = express.Router();
const Item = require("../../Model/Rent/Item");
const itemController = require("../../Controllers/Rent/ItemController");

router.get("/", itemController.getAllItems);
router.post("/", itemController.addItem);
router.get("/:id", itemController.getItemById);
router.put("/:id", itemController.updateItem);
router.delete("/:id", itemController.deleteItem);

module.exports = router;
