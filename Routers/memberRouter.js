const express = require("express");
const validateMW = require("../Core/Validations/validateMW");
const controller = require("../Controllers/memberController");
const validateMember = require("../Core/Validations/validateMember");
const multerMW = require("../Core/Multer/multerMW");

const router = express.Router();

router.route("/members")
                .get(controller.getAllMembers);

router.route("/members/:id")
                .get(
                    validateMember.validateId,
                    validateMW,
                    controller.getMemberById
                )
                .post(
                    validateMember.validatePostArray,
                    validateMW,
                    controller.addMember
                )
                .patch(
                    validateMember.validatePostArray,
                    validateMW,
                    controller.updateMember
                )
                .delete(
                    validateMember.validateId,
                    validateMW,
                    controller.deleteMember
                );

module.exports = router;