//import mongoose
const mongoose = require('mongoose');
//import mongoose auto increment
const autoIncrement = require('mongoose-sequence')(mongoose);

//create book schema 
const bookSchema = new mongoose.Schema({
    _id: Number,
    title:{
        type: String,
        required: true
    },
    auther: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    PublishingDate: {
        type: Date,
        required: true

    },
    Category: {
        type: String,
        required: true
    },
    Edition: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    NoOfCopies: {
        type: Number,
        required: true

    },
    Avilable: {
        type: Number,
        required: true
    },
    shelfNo: {
        type: Number,
        required: true
    }
}, { _id: false });

// //auto increment the id
bookSchema.plugin(autoIncrement, { id: 'bookId', inc_field: '_id' });

//export the book model
module.exports = mongoose.model('book', bookSchema);

