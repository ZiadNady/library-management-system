
const express=require("express");
//controllers
const controller=require("../Controllers/basicAdminController");
//validate
const {body,param,query}=require("express-validator");
const validateMW=require("./../Core/Validations/validateMW");
const basicAdminValidate = require("./../Core/Validations/validateBasicAdmin");
//route
const router=express.Router();

// Admin
router.route("/basicAdmin")
.get(validateMW,controller.getAllBasicAdmin)
.post(basicAdminValidate.addBasicAdmin,validateMW,controller.addBasicAdmin)
.put(basicAdminValidate.updateBasicAdmin,validateMW,controller.updateBasicAdmin)
.delete(validateMW,controller.deleteBasicAdmin);


module.exports=router;




