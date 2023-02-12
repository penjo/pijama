const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			trim: true,
			required: true,
		},
		password: {
			type: String,
			trim: true,
			required: true,
			minlength: 6,
		},
		avatar: {
			avatarName: { type: String, trim: true },
			avatarURL: { type: String, trim: true },
		},
		username: {
			type: String,
			trim: true,
			required: true,
		},
		firstName: {
			type: String,
			trim: true,
			required: true,
		},
		lastName: {
			type: String,
			trim: true,
			required: true,
		},
		address: {
			type: String,
			trim: true,
			required: true,
		},
		phoneNumber: {
			type: String,
			trim: true,
			required: true,
		},
		dateOfBirth: {
			type: Date,
			default: new Date("2000-01-01"), // Mac dinh ngay sinh 2000-01-01
		},
		status: {
			type: Number,
			trim: true,
			default: 1, //Mặc định khi tạo tài khoản thì status luôn là 1
		},

		passwordChangedAt: Date,
		passwordResetToken: String,
		passwordResetExpires: Date,
	},
	{ timestamps: true },
	{
		collection: "T_USER", //Tên collection chúng ta muốn tạo ra trong database
	}
);

//Export the model
module.exports = mongoose.model("UserModel", userSchema);
