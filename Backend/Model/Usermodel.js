const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Firstname: {
        type: String,
        required:true
    },
    Lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model(
    "Usermodel", // Collection name
    userSchema // Schema
);
