const express = require("express");
const validateMW = require("../Core/Validations/validateMW");
const controller = require("../Controllers/memberController");
const validateMember = require("../Core/Validations/validateMember");
const multerMW = require("../Core/Multer/multerMW");

const router = express.Router();

router("/members")
                .get(controller.getAllMembers)
                .post(
                    multerMW,
                    validateMember.validatePostArray,
                    validateMW,
                    controller.addMember
                    )
                .patch(
                    multerMW,
                    validateMember.validatePatchArray,
                    validateMW,
                    controller.updateMember
                )
                .delete(
                    validateMember.validateId,
                    validateMw,
                    controller.deleteMember
                );

router.route("/employeed/:id")
                            .get(
                                validateMember.validateId,
                                validateMW,
                                controller.getEmployeeById
                            ).patch();

module.exports = router;