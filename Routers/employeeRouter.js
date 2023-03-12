const express = require("express");
const validateMW = require("../Core/Validations/validateMW");
const controller = require("../Controllers/employeeController");
const validateEmployee = require("../Core/Validations/validateEmployee");
const multerMW = require("../Core/Multer/multerMW");

const router = express.Router();

router
  .route("/employees")
  .get(controller.getEmployees)
  .post(
    multerMW,
    validateEmployee.validatePostArray,
    validateMW.validateImageMW,
    controller.addEmployee
  )
  .patch(
    multerMW,
    validateEmployee.validatePatchArrayAdmin,
    validateMW.validateImageMW,
    controller.updateEmployee
  )
  .delete(
    multerMW,
    validateEmployee.validateId,
    validateMW,
    controller.deleteEmployee
  );

router.get(
  "/employees/:id",
  validateEmployee.validateIdParam,
  validateMW,
  controller.getEmployeeById
);

module.exports = router;
