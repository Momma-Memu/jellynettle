const express = require('express');
const asyncHandler = require('express-async-handler');

const { User } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler(async function (req, res, next) {
    const { id } = req.body
    const user = await User.findByPk(id);
    res.json({ user });
}));

module.exports = router;
