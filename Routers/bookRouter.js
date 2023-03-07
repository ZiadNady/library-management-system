//import express
const express = require('express');
//import book controller
const bookController = require('./../Controllers/bookController');
//import validateMW
const validateMW = require('./../Core/Validations/validateMW');
//import bookvalidator
const bookValidator = require('./../Core/Validations/validateBook');
//create router
const router = express.Router();
//add new book

router.route('/book')
    .post(bookValidator.postValidator,validateMW,bookController.addNewBook)
    .get(validateMW,bookController.getAllBooks);

//update book by id
router.route('/book/:id')
    .patch(bookValidator.updateValidator,validateMW,bookController.updateBookById);

//get book by id
router.route('/book/:id')
    .get(bookValidator.getByIdValidator,validateMW,bookController.getBookById)
    .delete(bookValidator.getByIdValidator,validateMW,bookController.deleteBookById);

//get book by title
router.route('/book/:title')
    .get(bookValidator.getByTitleValidator,validateMW,bookController.getBookByTitle);

//get book by auther and publisher
router.route('/book/:auther/:publisher')
    .get(bookValidator.getByAutherAndPublisherValidator,validateMW,bookController.getBookByAutherAndPublisher);

//get book by category
router.route('/book/:category')
    .get(bookValidator.getByCategoryValidator,validateMW,bookController.getBookByCategory);



//export router
module.exports = router;
