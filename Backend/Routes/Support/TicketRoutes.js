const express=require("express");
const router=express.Router();

//Insert Model
const Ticket = require("../../Model/Support/TicketModel");
//Insert Ticket controller
const TicketController = require("../../Controllers/Support/TicketControllers");
//  Insert Attachement
const FileAttach = require("../../FileAttach/FileAttach");

router.get("/",TicketController.getAllTickets);
router.post("/",TicketController.addTickets);
router.get("/:id",TicketController.getById);
router.put ("/:id",TicketController.updateTicket);
router.delete ("/:id",TicketController.deleteTicket);

//export
module.exports=router;