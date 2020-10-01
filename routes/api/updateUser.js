const express = require('express');
const asyncHandler = require('express-async-handler');
const { Post, Friend, User } = require('../../db/models');
const { generateToken } = require('./security-utils');
const { Op } = require("sequelize");

const router = express.Router();

router.post('/description', asyncHandler(async function (req, res, next) {
    const { id, description } = req.body

    const update = await User.update({ description: description }, { where:  { id: id } })
    const user = await User.findOne({ attributes:['description'], where: { id }})
    res.json({ description: user.description })
    return
}));

module.exports = router;
