const { body } = require("express-validator");

exports.validatePostArray = [
    body("firstName").isAlpha().withMessage("First name must be alphabetic"),
    body("lastName").isAlpha().withMessage("last name must be alphabetic"),
    body("email").isEmail().withMessage("Email is not Valid"),
    body("password").isStrongPassword().withMessage("Password must be strong"),
    body("gender")
        .optional()
        .isIn(["male", "female"])
        .withMessage("Gender must be either male or female"),
    body("birthDate")
        .optional()
        .isDate()
        .withMessage("Birth date must be a valid date"),
    body("image").optional().isString().withMessage("Image must be a string"),
    body("phoneNumber").isMobilePhone().withMessage("Invalid Phone number")
];

exports.validatePatchArray = [
    body("id").idNumeric().withMessage("Id must be a number"),
    body("firstName").optional().isAlpha().withMessage("First name must be alphabetic"),
    body("lastName").optional().isAlpha().withMessage("last name must be alphabetic"),
    body("email").optional().isEmail().withMessage("Email is not Valid"),
    body("password").optional().isStrongPassword().withMessage("Password must be strong"),
    body("gender")
        .optional()
        .isIn(["male", "female"])
        .withMessage("Gender must be either male or female"),
    body("birthDate")
        .optional()
        .isDate()
        .withMessage("Birth date must be a valid date"),
    body("image").optional().isString().withMessage("Image must be a string"),
    body("phoneNumber").optional().isMobilePhone().withMessage("Invalid Phone number")
];

exports.validateId = [
    body("id").isNumeric().withMessage("Member Id should be number")
];

