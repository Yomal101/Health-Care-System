const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regiSchema = new Schema({
    Firstname: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required:true
    },
    Country: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required:true
    },

    resetToken: {
        type: String,
        default: null
    },
    resetTokenExpires: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model(
    "Register", // Collection name
    regiSchema // Schema
);
