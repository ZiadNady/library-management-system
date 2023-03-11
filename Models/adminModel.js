const mongoose = require("mongoose");
const extendSchema = require("mongoose-extend-schema");
const autoIncrement = require("mongoose-auto-increment");
const basicUserSchema = require("./userModel");
autoIncrement.initialize(mongoose.connection);

const adminSchema = extendSchema(basicUserSchema, {
	hireDate: {
		type: Date,
		default: Date.now,
	},
	salary: {
		type: Number,
		default: 3500,
	},
});
adminSchema.plugin(autoIncrement.plugin, "admin");
mongoose.model("admin", adminSchema);
