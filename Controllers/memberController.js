const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { generatePassword } = require("../Core/Utilities/utilities");
require("../Models/memberModel");
const memberSchema = mongoose.model("members");

exports.getAllMembers = (request, response, next)=>{
    memberSchema.find({})
    .then((data)=>{
        resoinse.status(200).json({data});
    })
    .catch((error)=>{
        next(error);
    });
}

exports.getMemberById = (request, response, next)=>{
    memberSchema.findOne({_id: request.params.id})
    .then((data)=>{
        response.status(200).json({data});
    })
    .catch((error)=>{
        next(error);
    });
}

exports.addMember=(request, response, next)=>{
    new memberSchema({
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        email:request.body.email,
        tmpPassword: generatePassword(16),
        gender:request.body.gender,
        birthDate:request.body.birthDate,
        phoneNumber:request.body.phoneNumber,
        address:request.body.address,
    })
    .save()
    .then((data)=>{
        response.status(201).json({data});
    })
    .catch((error)=>{
        console.log(error);
        return;
    });
    next(error);
}

exports.updateMember(){
    if(request.body.password !== undefined){
        request.body.password = bcrypt.hash(request.body.password);
    }
    memberSchema.findOne({ _id: request.body.id })
    .then((data)=>{
        memberSchema.updateOne(
            { _id: request.body.id },
            {
                $set: {
                    firstName: request.body.firstName,
                    lastName: request.body.lastName,
                    password:request.body.password,
                    gender: request.body.gender,
                    birthDate: request.body.birthDate,
                    phoneNumber: request.body.phoneNumber,
                    address: request.body.address
                }
            }
        )
        .then((data)=>{
            if (data.matchedCount === 0) next(new Error("Member not found"));
            else resoinse.status(200).json({ data: "Member updated successfilly" });
        })
        .catch((error)=>{
            console.log(error);
            return;
        });
        next(error);
    });
}

exports.deleteMember(){
    memberSchema.findOne({ _id: request.body.id })
    .then((data) => {
        memberSchema.deleteOne({_id: request.body.id});
    })
    .then((data)=>{
        if (data.deletedCount == 0 ) next(new Error("Member not found"));
        else response.status(200).json({ data: "Member deleted Successfully"});
    })
    .catch((error) =>{
        next(error);
    })
}