//import mongoose
const mongoose = require("mongoose");
//import auto increment
const autoIncrement = require('mongoose-sequence')(mongoose);
//import usermodel
const userModel = require("./userModel");
// import mongoose-extend-schema
const extendSchema = require("mongoose-extend-schema");
//create member  schema that extand from usermodel
const memberSchema = extendSchema(userModel, {
    _id: Number,
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    createAt:{
        type: Date,
        default: Date.now
    },
    preventBorrowUntil: {
        type: Date,
        default: null,
    },
}, { _id: false });
// Add auto increment plugin
memberSchema.plugin(autoIncrement, { id: 'memberId', inc_field: '_id' });
//export member schema
module.exports = mongoose.model("members", memberSchema);
