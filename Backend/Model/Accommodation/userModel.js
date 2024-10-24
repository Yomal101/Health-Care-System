const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Defining the schema in MongoDB
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
   
    country: {
        type: String,
        required: true
    },
    
    accommodations: {
        type: String,
        required: true
    },
    destinations: {
        type: String,
        required: true
    },
    activities: {
        type: String,
        required: true
    },
    accommodationsRating: {
        type: Number,
        required: true
    },
    destinationsRating: {
        type: Number,
        required: true
    },
    activitiesRating: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);
