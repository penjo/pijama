var express = require('express');
const { registerUser } = require('../controllers/UserController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route("/register").post(registerUser);

module.exports = router;
