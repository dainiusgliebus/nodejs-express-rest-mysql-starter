const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');
const validate = require('express-validation');
const authValidation = require('../validations/auth')

router.route('/auth/login').post(validate(authValidation.loginParam), auth.login);

module.exports = router;