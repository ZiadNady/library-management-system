//import mongoose
const mongoose = require("mongoose");
//import auto increment
const autoIncrement = require('mongoose-sequence')(mongoose);
//import book schema
const bookSchema = require("./bookModel");
//import employee schema
const employeeSchema = require("./employeeModel");
//import member schema
const memberSchema = require("./memberModel");
//create usebookschema
const useBookSchema = new mongoose.Schema({
    _id: Number,
    bookId: {
        type: Number,
        ref: bookSchema,
        required: true
    },
    memberId: {
        type: Number,
        ref: memberSchema,
        required: true
    },
    employeeId: {
        type: Number,
        ref: employeeSchema,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["borrow", "read"],
        required: true
    }
}, { _id: false });

// Add auto increment plugin
useBookSchema.plugin(autoIncrement, { id: 'useBookId', inc_field: '_id' });


//create usebook model
const useBook = mongoose.model("useBook", useBookSchema);
