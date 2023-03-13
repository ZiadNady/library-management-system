const mongoose = require("mongoose");
const extendSchema = require("mongoose-extend-schema");
const autoIncrement = require('mongoose-sequence')(mongoose);
const userSchema = require("./userModel");

const memberSchema = extendSchema(userSchema, {
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
