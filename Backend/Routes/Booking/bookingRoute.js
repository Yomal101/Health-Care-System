const express = require('express');
const router = express.Router();

const {
    getAllBookings,
    addBooking,
    getBooking,
    deleteBooking,
    updateBooking,
} = require('../../Controllers/Booking/bookingController');

router.get('/getAllBookings', getAllBookings);
router.post('/addBooking', addBooking);
router.get('/getBooking/:id', getBooking);
router.delete('/deleteBooking/:id', deleteBooking);
router.put('/updateBooking/:id', updateBooking);

module.exports = router;