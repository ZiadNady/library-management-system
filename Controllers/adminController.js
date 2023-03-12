const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const fs = require("fs");
require("../Models/adminModel");
const AdminSchema = mongoose.model("admin");
const saltRounds = 10;

exports.allAdmins = (request, response, next) => {
	AdminSchema.find({})
		.then((data) => {
			response.status(200).json({ data });
		})
		.catch((error) => {
			next(error);
		});
}; // Route --> /admins/

exports.getOneAdmin = (request, response, next) => {
	AdminSchema.findOne({ _id: request.params.id })
		.then((data) => {
			response.status(200).json({ data });
		})
		.catch((error) => {
			next(error);
		});
}; // --> Route >> /admins/:id

exports.insertAdmin = (request, response, next) => {
	// request.body.password = bcrypt.hashSync(request.body.password, saltRounds);
	const imagePath = request.file === undefined ? null : request.file.path;
	new AdminSchema({
		firstName: request.body.firstName,
		lastName: request.body.lastName,
		email: request.body.email,
		tmpPassword: request.body.password,
		// Q / Why is that ?? For password ?
		gender: request.body.gender,
		birthDate: request.body.birthDate,
		salary: request.body.salary,
		image: imagePath,
	})
		.save()
		.then((data) => {
			response.status(201).json({ data });
		})
		.catch((error) => {
			next(error);
		});
}; // Route >> admins/ POST

exports.updateAdmin = (request, response, next) => {
	let imagePath = request.file === undefined ? null : request.file.path;
	if (request.body.password !== undefined) {
		request.body.password = bcrypt.hash(request.body.password, saltRounds);
		// I think this is a Promise @Ayman
	}
	AdminSchema.findOne({ _id: request.body.id }, { image: 1 })
		.then((data) => {
			if (data.image !== null) {
				if (imagePath === null) imagePath = data.image;
				else {
					fs.unlink(data.image, (error) => {
						console.log(error);
						return;
					});
				}
			}
			return AdminSchema.updateOne(
				{
					_id: request.body.id,
				},
				{
					$set: {
						firstName: request.body.firstName,
						lastName: request.body.lastName,
						email: request.body.email,
						password: request.body.password,
						gender: request.body.gender,
						birthDate: request.body.birthDate,
						salary: request.body.salary,
						image: imagePath,
					},
				}
			);
		})
		.then((data) => {
			if (data.matchedCount === 0) next(new Error("Admin not found"));
			else
				response
					.status(200)
					.json({ data: "Admin updated successfully" });
		})
		.catch((error) => {
			next(error);
		});
}; // Route >> admins/ PATCH

exports.deleteAdmin = (request, response, next) => {
	AdminSchema.findOne({ _id: request.body.id })
		.then((data) => {
			if (data !== null && data.image !== null) {
				fs.unlink(data.image, (error) => {
					console.log(error);
					return;
				});
			}
			return AdminSchema.deleteOne({ _id: request.body.id });
		})
		.then((data) => {
			if (data.deletedCount == 0) next(new Error("Admin not found"));
			else
				response
					.status(200)
					.json({ data: "Admin deleted successfully" });
		})
		.catch((error) => {
			next(error);
		});
}; // Route >> /admin DELETE
