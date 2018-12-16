const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');
const authenticate = require('../middleware/authenticate')

router.get('/auth/me', authenticate, auth.me);

module.exports = router;