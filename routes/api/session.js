const express = require('express');
const asyncHandler = require('express-async-handler');

const { User } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler(async function (req, res, next) {
    const { email } = req.body
    const users = await User.findOne({ where: { email } });
    res.json({ users });
}));

module.exports = router;