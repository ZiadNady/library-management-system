
const mongoose=require("mongoose");

const basicAdminSchema = new mongoose.Schema({
  _id:{type: Number , required: true},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  birthDate: { type: Date , default:Date.now },
  hireDate: { type: Number },
  image: { type: String },
  salary: { type: Number ,default:10000 },
});

mongoose.model("basicAdmins",basicAdminSchema);


