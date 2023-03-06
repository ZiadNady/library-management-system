const { validationResult } = require("express-validator");
const fs = require("fs");

module.exports = (request, response, next) => {
  let result = validationResult(request);
  if (result.errors.length != 0) {
    let errorMsg = result.errors.reduce(
      (current, error) => current + error.msg + ", ", ""
    );
    let error = new Error(errorMsg);
    error.status = 422;
    next(error);
  }
  else
    next();
};

module.exports.validateImageMW = (request, response, next) => {
  let result = validationResult(request);
  if (result.errors.length != 0) {
    fs.unlink(request.file.path, (error) => {
      console.log(error);
      return;
    });

    let errorMsg = result.errors.reduce(
      (current, error) => current + error.msg + ", ", ""
    );
    let error = new Error(errorMsg);
    error.status = 422;
    next(error);
  }
  else
    next();
};