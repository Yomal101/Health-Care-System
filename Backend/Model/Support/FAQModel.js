const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const faqSchema = new Schema({
    category: {
        type: String,
        enum: ['Accommodation', 'Transportation', 'Attractions/Tours', 'General Inquiry', 'Other'], // Valid category values
        required: true
    },
    question: {
        type: String,
        required: true,
        maxlength: 255 // Maximum 255 characters allowed for question
    },
    answer: {
        type: String
    }
});

module.exports = mongoose.model("FAQ", faqSchema);
