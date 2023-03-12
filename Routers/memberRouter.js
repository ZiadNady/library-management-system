const express = require("express");
const validateMW = require("../Core/Validations/validateMW");
const controller = require("../Controllers/memberController");
const validateMember = require("../Core/Validations/validateMember");
const multerMW = require("../Core/Multer/multerMW");

const router = express.Router();

router("/members")
                .get(controller.getAllMembers);

router.route("/members/:id")
                            .get(
                                validateMember.validateId,
                                validateMW,
                                controller.getEmployeeById
                            )
                            .post(
                                
                            ),
                            .patch(

                            ),
                            delete(

                            ),
router.route("/members/:id/books/:since");

module.exports = router;