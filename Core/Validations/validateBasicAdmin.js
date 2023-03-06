
const { body,param } = require('express-validator');

module.exports.addBasicAdmin= [
    body('_id'),
    body('firstName').isString().withMessage('Wrong Name'),
    body('lastName').isString().withMessage('Wrong Name'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('birthDate').isDate().withMessage('Invalid date'),
    body('hireDate').isDate().withMessage('Invalid date'),
    body('image'),
    body('salary').isNumeric().withMessage('Invalid salary'),

];

module.exports.updateBasicAdmin = [
    body('_id').optional(),
    body('firstName').optional().isString().withMessage('Wrong Name'),
    body('lastName').optional().isString().withMessage('Wrong Name'),
    body('email').optional().isEmail().withMessage('Invalid email'),
    body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('birthDate').optional().isDate().withMessage('Invalid date'),
    body('hireDate').optional().isDate().withMessage('Invalid date'),
    body('image'),
    body('salary').optional().isNumeric().withMessage('Invalid salary'),
]