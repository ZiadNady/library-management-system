const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    _id: Number,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    tmpPassword: String,
    password: String,
    gender: String,
    birthDate: Date,
    image: String
});