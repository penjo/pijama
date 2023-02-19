const Lib = require("../common/Lib");
const messageResource = require("../common/Message");
const UserModel = require("../models/User/UserModel");
const { getOne } = require("../services/handleDatabase");

// POST register
const registerUser = async (req, res) => {
	console.log("Register User");
	// Thong tin request body
	const {
		email,
		password,
		avatar,
		username,
		firstName,
		lastName,
		address,
		phoneNumber,
		dateOfBirth,
	} = req.body;

	try {
		// kiem tra da ton tai user hay chua
		// check user bang ham findOne (document monggodb)
		// tra ve thong tin user neu ton tai user nguoc lai tra ve null
		const isAvailable = await UserModel.findOne({ email: email });

		// neu co user thi tra ve email da ton tai
		if (isAvailable) {
			return res
				.status(400)
				.json({ message: messageResource.EmailHasBeenUsed });
		}

		// goi ham hassPassword trong Lib de ma hoa user password
		const hashedPassword = await Lib.hashPassword(password);

		// sau khi ma hoa user thi tao cau truc cho user
		const data = new UserModel({
			email,
			avatar,
			username,
			firstName,
			lastName,
			address,
			phoneNumber,
			dateOfBirth,
			password: hashedPassword,
		});

		// goi ham tao user va luu trong database
		const userData = await UserModel.create(data);
		// kiem tra neu tao thanh cong thi tra ve
		if (userData) {
			const result = {
				email: data.email,
				username: data.username,
				firstName: data.firstName,
				lastName: data.lastName,
				avatar: data.avatar,
				address: data.address,
				phoneNumber: data.phoneNumber,
				dateOfBirth: data.dateOfBirth,
			};
			res.status(200).json({ message: "Success", data: result });
		} else {
			res.status(400).json({ message: "Register fails!" });
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// POST Login User
const loginUser = async (req, res) => {
	const { email, password } = res.body;
	try {
		console.log(email);
	} catch (error) {
		console.log(error);
	}
};

// GET Get All Users
const getAllUsers = async (req, res) => {
    console.log("Get All Users")
	try {

		const { limit, skip, sort } = req.query;

        // su dung ham find de lay tat ca cac user trong database
        // limit: lay gioi han so luong output VD: limit = 2 => tra ve thong tin 2 user
        // skip: dung de chia trang, thuong di chung voi limit, 
        // vd skip=0, limit=2 => 2 user cu nhat, skip =1, limit=2 => tra ve 2 user tiep theo, bo qua 2 user dau
        // sort: de sap xep theo thu tu VD: sort = {createdAt: 1} => tra ve list user theo thu tu old to newest
		const users = await UserModel.find()
			.limit(limit)
			.skip(skip)
			.sort(sort || { createdAt: 1 });
        
        // count de dem so luong user co trong db, dung de phan trang trong admin
        const count = await UserModel.count()

        if(users){
            res.status(200).json({message: "Success", data: users, count:count });
        }else{
            res.status(400).json({ message: "Get All Users Fails" });
        }
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// GET Get User By ID
const getUserByID = async (req, res) => {
    console.log("Get User By ID")
	try {
		const {id} = req.query

		const user = await UserModel.findById(id)
        
        if(user){
            res.status(200).json({ message: "Success", data: user });
        }else{
            res.status(400).json({ message: "Get User By ID Fails" });
        }
		
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	registerUser,
	loginUser,
    getAllUsers,
    getUserByID
};
