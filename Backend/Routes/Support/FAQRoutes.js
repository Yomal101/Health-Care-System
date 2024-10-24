const express = require("express");
const router = express.Router();
const FAQController = require("../../Controllers/Support/FAQControllers");

router.get("/", FAQController.getAllFAQs);
router.post("/", FAQController.addFAQ);
router.get("/:id", FAQController.getById);
router.put("/:id", FAQController.updateFAQ);
router.delete("/:id", FAQController.deleteFAQ);

module.exports = router;
