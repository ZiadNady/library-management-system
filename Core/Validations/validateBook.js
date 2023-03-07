// import body , param , query from express-validator
const {body,param,query}=require("express-validator");
// import book models
const Book=require('./../../Models/bookModel');
//export post validator
exports.postValidator=[
    body("title").isString().withMessage('title must be string')
    .notEmpty().withMessage('title must not be empty'),
    body("auther").isString().withMessage('auther must be string')
    .notEmpty().withMessage('auther must not be empty'),
    body("publisher").isString().withMessage('publisher must be string')
    .notEmpty().withMessage('publisher must not be empty'),
    body("PublishingDate").isDate().withMessage('PublishingDate must be date')
    .notEmpty().withMessage('PublishingDate must not be empty'),
    body("Category").isString().withMessage('Category must be string')
    .notEmpty().withMessage('Category must not be empty'),
    body("Edition").isString().withMessage('Edition must be string')
    .notEmpty().withMessage('Edition must not be empty'),
    body("pages").isNumeric().withMessage('pages must be number')  
    .notEmpty().withMessage('pages must not be empty'),
    body("NoOfCopies").isNumeric().withMessage('NoOfCopies must be number')
    .notEmpty().withMessage('NoOfCopies must not be empty'),
    body("Avilable").isNumeric().withMessage('Avilable must be number')
    .notEmpty().withMessage('Avilable must not be empty'),
    body("shelfNo").isNumeric().withMessage('shelfNo must be number')
    .notEmpty().withMessage('shelfNo must not be empty')
];
//export get by id validator 
exports.getByIdValidator=[
    param("id").isNumeric().withMessage('id must be number')
    .notEmpty().withMessage('id must not be empty')
];

//export get by title validator
exports.getByTitleValidator=[
    param("title").isString().withMessage('title must be string')
    .notEmpty().withMessage('title must not be empty')
];

//export get by auther and publisher validator
exports.getByAutherAndPublisherValidator=[
    param("auther").isString().withMessage('auther must be string')
    .notEmpty().withMessage('auther must not be empty'),
    param("publisher").isString().withMessage('publisher must be string')
    .notEmpty().withMessage('publisher must not be empty')
];

//export get by category validator
exports.getByCategoryValidator=[
    param("category").isString().withMessage('category must be string')
    .notEmpty().withMessage('category must not be empty')
];

//export update validator
exports.updateValidator=[
    param("id").isNumeric().withMessage('id must be number')
    .notEmpty().withMessage('id must not be empty'),
    body("title").isString().withMessage('title must be string')
    .notEmpty().withMessage('title must not be empty'),
    body("auther").isString().withMessage('auther must be string')
    .notEmpty().withMessage('auther must not be empty'),
    body("publisher").isString().withMessage('publisher must be string')
    .notEmpty().withMessage('publisher must not be empty'),
    body("PublishingDate").isDate().withMessage('PublishingDate must be date')
    .notEmpty().withMessage('PublishingDate must not be empty'),
    body("Category").isString().withMessage('Category must be string')
    .notEmpty().withMessage('Category must not be empty'),
    body("Edition").isString().withMessage('Edition must be string')
    .notEmpty().withMessage('Edition must not be empty'),
    body("pages").isNumeric().withMessage('pages must be number')
    .notEmpty().withMessage('pages must not be empty'),
    body("NoOfCopies").isNumeric().withMessage('NoOfCopies must be number')
    .notEmpty().withMessage('NoOfCopies must not be empty'),
    body("Avilable").isNumeric().withMessage('Avilable must be number')
    .notEmpty().withMessage('Avilable must not be empty'),
    body("shelfNo").isNumeric().withMessage('shelfNo must be number')
    .notEmpty().withMessage('shelfNo must not be empty')
];






