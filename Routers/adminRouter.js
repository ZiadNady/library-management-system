// Get all Admins
// Create Admin , Update admin , Delete admin , Read One admin
// A route is Made to Affect the Model , This affect is through the Controllers
const express = require("express");
const validateMW = require("../Core/Validations/validateMW");
const controller = require("../Controllers/adminController");
const adminValidationArrays = require("../Core/Validations/validateAdmin");
const multerMW = require("../Core/Multer/multerMW");
// AU -->TODO
const router = express.Router();

router
	.route("/admins")
	.get(controller.allAdmins)
	.post(
		multerMW,
		adminValidationArrays.validatePostArray,
		validateMW,
		controller.insertAdmin
	)
	.patch(
		multerMW,
		adminValidationArrays.validatePatchArrayAdmin,
		validateMW,
		controller.updateAdmin
	)
	.delete(
		adminValidationArrays.validateId,
		validateMW,
		controller.deleteAdmin
	);

router.get(
	"/admin/:id",
	adminValidationArrays.validateIdParam,
	validateMW,
	controller.getOneAdmin
);

module.exports = router;
