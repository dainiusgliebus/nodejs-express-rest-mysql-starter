const express = require('express');
const praviteRouter = require('./private');
const publicRouter = require('./public');

const router = express.Router();

router.use('/', praviteRouter);
router.use('/', publicRouter);

module.exports = router;