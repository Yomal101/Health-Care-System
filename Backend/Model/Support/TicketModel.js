const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    ticketID: {
        type: Number,
        unique: true
    },
    dateCreated: {
        type: Date
    },
    subject: {
        type: String,
        required: true,
        maxlength: 60 // Maximum 60 characters allowed
    },
    description: {
        type: String,
        required: true,
        maxlength: 1000 // Maximum 1000 characters allowed
    },
    touristInfo: {
        name: {
            type: String,
            required: true,
            maxlength: 50 // Maximum 50 characters allowed
        },
        contactNumber: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return /\d{10}/.test(v); // Validate contactNumber format (10 digits)
                },
                message: props => `${props.value} is not a valid contact number!`
            }
        },
        email: {
            type: String,
            required: true,
        },
        bookingID: {
            type: String
        }
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High', 'Urgent'], // Valid priority values
        required: true
    },
    category: {
        type: String,
        enum: ['Accommodation', 'Transportation', 'Attractions/Tours', 'General Inquiry', 'Other'], // Valid category values
        required: true
    },
    attachments: {
        type:String
    },
    answer: {
        type: String
    }
});

ticketSchema.plugin(AutoIncrement, { inc_field: 'ticketID' });

module.exports = mongoose.model("Ticket", ticketSchema);
