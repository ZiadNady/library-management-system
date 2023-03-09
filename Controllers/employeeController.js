const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const fs = require("fs");
require("../Models/employeeModel");
const EmployeeSchema = mongoose.model("employees");
const saltRounds = 10;

exports.getEmployees = (request, response, next) => {
  if (request.query.firstname === undefined)
    request.query.firstname = "";
  if (request.query.lastname === undefined)
    request.query.lastname = "";

  EmployeeSchema.find({
    firstName: { $regex: request.query.firstname, $options: "i" },
    lastName: { $regex: request.query.lastname, $options: "i" }
  })
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => {
      next(error);
    });
};

exports.getEmployeeById = (request, response, next) => {
  EmployeeSchema.findOne({ _id: request.params.id })
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => {
      next(error);
    });
};

exports.addEmployee = (request, response, next) => {
  // request.body.password = bcrypt.hashSync(request.body.password, saltRounds);
  const imagePath = request.file === undefined ? null : request.file.path;
  new EmployeeSchema({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    tmpPassword: request.body.password,
    gender: request.body.gender,
    birthDate: request.body.birthDate,
    salary: request.body.salary,
    image: imagePath,
  })
    .save()
    .then((data) => {
      response.status(201).json({ data });
    })
    .catch((error) => {
      next(error);
    });
};

exports.updateEmployee = (request, response, next) => {
  let imagePath = request.file === undefined ? null : request.file.path;
  if (request.body.password !== undefined) {
    request.body.password = bcrypt.hash(request.body.password, saltRounds);
  }
  EmployeeSchema.findOne({ _id: request.body.id }, { image: 1 })
    .then((data) => {
      if (data.image !== null) {
        if (imagePath === null) imagePath = data.image;
        else {
          fs.unlink(data.image, (error) => {
            console.log(error);
            return;
          });
        }
      }
      return EmployeeSchema.updateOne(
        {
          _id: request.body.id,
        },
        {
          $set: {
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            email: request.body.email,
            password: request.body.password,
            gender: request.body.gender,
            birthDate: request.body.birthDate,
            salary: request.body.salary,
            image: imagePath,
          },
        }
      );
    })
    .then((data) => {
      if (data.matchedCount === 0) next(new Error("Employee not found"));
      else response.status(200).json({ data: "Employee updated successfully" });
    })
    .catch((error) => {
      next(error);
    });
};

exports.deleteEmployee = (request, response, next) => {
  EmployeeSchema.findOne({ _id: request.body.id })
    .then((data) => {
      if (data !== null && data.image !== null) {
        fs.unlink(data.image, (error) => {
          console.log(error);
          return;
        });
      }
      return EmployeeSchema.deleteOne({ _id: request.body.id });
    })
    .then((data) => {
      if (data.deletedCount == 0) next(new Error("Employee not found"));
      else response.status(200).json({ data: "Employee deleted successfully" });
    })
    .catch((error) => {
      next(error);
    });
};
