const Lib = require("../common/Lib");
const messageResource = require("../common/Message");
const UserModel = require("../models/User/UserModel");
const { getOne } = require("../services/handleDatabase");



const registerUser = async(req,res)=>{

    try {
        const password = await Lib.hashPassword(req.body.password);
        const isAvailable = await getOne(UserModel,{email:email});
        console.log(password);
        if(isAvailable){
            return res.status(400).json({ message: messageResource.EmailHasBeenUsed });
        }
        
        const data = new UserModel({
            ...req.body,
            password:password,
        })
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const loginUser= async(req,res)=>{
    const {email,password}=res.body;
    try {
        console.log(email)
    } catch (error) {
        console.log(error)
    }
}

// exports.getAllUsers=async(req,res)=>{
//     try {
//         const users = await getAll(UserModel);
//         console.log(users)
//         res.json({ data: users, status: "success" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

module.exports ={
    registerUser,
    loginUser
}