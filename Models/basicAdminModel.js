
const mongoose=require("mongoose");

const basicAdminSchema = new mongoose.Schema({
    _id:{type: Number , required: true},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    birthDate: { type: Number },
    hireDate: { type: Number },
    image: { type: String },
    salary: { type: Number },
  });

mongoose.model("basicAdmins",basicAdminSchema);


