//import mongoose
const mongoose = require("mongoose");
//import auto increment
const autoIncrement = require('mongoose-sequence')(mongoose);
//inatioalize autoincrement
autoIncrement.initialize(mongoose.connection);
//import usermodel
const userModel = require("./userModel");
// import mongoose-extend-schema
const extendSchema = require("mongoose-extend-schema");
//create member  schema that extand from usermodel
const memberSchema = extendSchema(userModel, {
    _id:Number,
    phoneNumber: {
        type: String,
        required: false
    },
    address: {
        type: Object,
        required: false
    },
    createAt:{
        type: Date,
        default: Date.now
    },
    preventBorrowUntil: {
        type: Date,
        default: null,
    },
    
},{_id:false});

//add auto increment to member schema
memberSchema.plugin(autoIncrement, { id:"memberId", inc_field:"_id" });
//export member schema
mongoose.model("members", memberSchema);
