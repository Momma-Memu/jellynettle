const express = require('express');
const asyncHandler = require('express-async-handler');
const { Post, Friend, User } = require('../../db/models');
const { generateToken } = require('./security-utils');
const { Op } = require("sequelize");

const router = express.Router();

router.post('/', asyncHandler(async function (req, res, next) {
    const { value } = req.body

    const users = await User.findAll({ where: { userName: { [Op.like]: `%${value}%` } } })

    res.json({ users })
    return
}));

module.exports = router;