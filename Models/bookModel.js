//import mongoose
const mongoose = require('mongoose');
//import mongoose auto increment
// const autoIncrement = require('mongoose-auto-increment');

//create book schema 
const bookSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        unique: true
        },
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
});

// //auto increment the id
// bookSchema.plugin(autoIncrement.plugin,{
//     model: 'book',
//     field: '_id',
//     startAt: 1,
//     incrementBy: 1
// });

//export the book model
module.exports = mongoose.model('book', bookSchema);

