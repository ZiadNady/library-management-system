
const { body,param } = require('express-validator');

module.exports.addBasicAdmin= [
    body('firstName').isAlpha().withMessage('Wrong FirstName'),
    body('lastName').isAlpha().withMessage('Wrong LastName'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('birthDate').optional().isDate().withMessage('Invalid date'),
    body('image').isString().optional(),
    body('salary').optional().isNumeric().withMessage('Invalid salary'),


    
];

module.exports.updateBasicAdmin = [
    body('_id').isNumeric(),
    body('firstName').optional().isString().withMessage('Wrong Name'),
    body('lastName').optional().isString().withMessage('Wrong Name'),
    body('email').optional().isEmail().withMessage('Invalid email'),
    body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('birthDate').optional().isDate().withMessage('Invalid date'),
    body('image').isString().optional(),
    body('salary').optional().isNumeric().withMessage('Invalid salary'),
]