var express = require('express');
const { registerUser, loginUser, getAllUsers, getUserByID } = require('../controllers/UserController');
var Const = require('../common/Const') 
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route(Const.linkRegister).post(registerUser);
router.route(Const.linkLogin).post(loginUser);
router.route(Const.linkGetAllUser).get(getAllUsers);
router.route(Const.linkGetUserByID).get(getUserByID);

module.exports = router;
