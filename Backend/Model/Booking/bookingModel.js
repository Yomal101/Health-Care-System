const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    arrivalDate: { type: Date, required: true },
    members: { type: Number, required: true },
    vehicleName: { type: String, required: true },
    guideNumber: { type: Number, required: true },
    places: { type: String, required: true },
    days: { type: Number, required: true },
},
{
    timestamps: true,
}
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;