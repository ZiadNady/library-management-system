const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const fs = require("fs");
const { generatePassword } = require("../Core/Utilities/utilities");
require("../Models/employeeModel");
const EmployeeSchema = mongoose.model("employees");
const saltRounds = 10;

exports.getReadingBooks(){

};

exports.getBorrowedBooks(){

};

exports.updateMember(){

};

