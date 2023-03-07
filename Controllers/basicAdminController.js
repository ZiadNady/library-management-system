

const mongoose=require("mongoose");
const bcrypt = require("bcryptjs");
const bcrypt = require('bcrypt');

require("./../Models/basicAdminModel");

// require("./../Modals/adminModel");
// require("./../Modals/bookModel");
// require("./../Modals/employeeModel");
// require("./../Modals/memberModel");


const BasicAdminSchema=mongoose.model("basicAdmins");

// const AdminSchema=mongoose.model("admins");
// const BookSchema=mongoose.model("books");
// const EmployeeSchema=mongoose.model("employees");
// const MemberSchema=mongoose.model("members");



//crud operation for basicAdmin

exports.getAllBasicAdmin= async (request,response,next)=>{
    try {
        const basicAdmin = await BasicAdminSchema.find();
        response.json(basicAdmin);
    } catch (error) {
        console.error(error.message);
        response.status(500).send("Server Error");
    }
}

exports.addBasicAdmin = async (request, response, next) => {
  const hashedPassword = await bcrypt.hash(request.body.password, 10);

  const basicAdmin = new BasicAdminSchema({
    _id: request.body._id,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: hashedPassword,
    birthDate: request.body.birthDate,
    hireDate: request.body.hireDate,
    image: request.body.image,
    salary: request.body.salary,
  });

  try {
    const data = await basicAdmin.save();
    response.status(201).json({ data });
  } catch (error) {
    next(error);
  }
};





exports.updateBasicAdmin = (request, response, next) => {
  const basicAdminUpdates = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: request.body.password,
    birthDate: request.body.birthDate,
    hireDate: request.body.hireDate,
    image: request.body.image,
    salary: request.body.salary,
  };

  BasicAdminSchema.updateOne({ _id: request.body._id }, { $set: basicAdminUpdates })
    .then((data) => {
      if(data.matchedCount==0)
          {
              next(new Error("basicAdmin not found"));
          }
          else
          response.status(200).json({data:"updated"});
      })
      .catch(error=>next(error));
};






exports.deleteBasicAdmin=(request,response,next)=>{
    BasicAdminSchema.deleteOne({
        _id:request.body._id

    }).then((data)=>{
        if(data.deletedCount === 0){
            response.status(404).json({msg: 'Not Found'});
        } else {
            response.status(200).json({msg: 'Deleted'});
        }
    })
}








