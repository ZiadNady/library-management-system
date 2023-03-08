//import mongoose
const mongoose = require("mongoose");
//import auto increment
const autoIncrement = require("mongoose-auto-increment");
//inatioalize autoincrement
autoIncrement.initialize(mongoose.connection);
//import book schema
const bookSchema = require("./bookModel");
//import employee schema
const employeeSchema = require("./employeeModel");
//import member schema
const memberSchema = require("./memberModel");
//create usebookschema
const useBookSchema = new mongoose.Schema({
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
});

//add auto increment to usebook schema
useBookSchema.plugin(autoIncrement.plugin, {
    model: "useBook",
    field: "_id",
    startAt: 1,
    incrementBy: 1
});


//create usebook model
const useBook = mongoose.model("useBook", useBookSchema);
