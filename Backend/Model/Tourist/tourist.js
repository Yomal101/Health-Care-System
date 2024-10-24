const mongoose = require('mongoose');//tourist.js

const Schema = mongoose.Schema;

const touristSchema = new Schema({
    name: {
        type : String,
        required: true
        
    },
    age: {
        type : Number,
        required: true 
    },
    country: {
        type : String,
        required: true 
    },
    gender: {
        type : String,
        required: true 
    },
    ipackage: {
        type : String,
        required: true
    },
    period: {
        type : String,
        required: true
    },
    destination: { 
        type : String,
        required: true
    },
    tripStartDate: { 
        type : Date,
        required: true
    },
    tripEndDate: { 
        type : Date,
        required: true
    }
    
})

const Tourist = mongoose.model("Tourist",touristSchema);

module.exports = Tourist;