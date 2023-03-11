const mongoose = require("mongoose");
const extendSchema = require("mongoose-extend-schema");
const autoIncrement = require('mongoose-sequence')(mongoose);
const userSchema = require("./userModel");

// Create employee schema
const employeeSchema = extendSchema(userSchema, {
  _id: Number,
  hireDate: {
    type: Date,
    default: Date.now
  },
  salary: {
    type: Number,
    default: 3500
  },
  notifications: [Object]
}, { _id: false });

// Add auto increment plugin
employeeSchema.plugin(autoIncrement, { id: 'employeeId', inc_field: '_id' });

// Mapping Schema to Model
mongoose.model("employees", employeeSchema);