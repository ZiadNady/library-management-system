const mongoose = require("mongoose");
const extendSchema = require("mongoose-extend-schema");
const autoIncrement = require("mongoose-auto-increment");
const userSchema = require("./userModel");

// Initialize the autoIncrement plugin
autoIncrement.initialize(mongoose.connection);

// Create employee schema
const employeeSchema = extendSchema(userSchema, {
  hireDate: {
    type: Date,
    default: Date.now
  },
  salary: {
    type: Number,
    default: 3500
  },
  notifications: [Object]
});

// Add auto increment plugin
employeeSchema.plugin(autoIncrement.plugin, "employees");

// Mapping Schema to Model
mongoose.model("employees", employeeSchema);