//import mongoose
const mongoose = require("mongoose");
//import auto increment
const autoIncrement = require("mongoose-auto-increment");
//inatioalize autoincrement
autoIncrement.initialize(mongoose.connection);
//import usermodel
const userModel = require("./userModel");
// import mongoose-extend-schema
const extendSchema = require("mongoose-extend-schema");
//create member  schema that extand from usermodel
const memberSchema = extendSchema(userModel, {
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
    
});
//add auto increment to member schema
memberSchema.plugin(autoIncrement.plugin, {
    model: "members",
    field: "_id",
    startAt: 1,
    incrementBy: 1
});
//export member schema
module.exports = mongoose.model("members", memberSchema);
