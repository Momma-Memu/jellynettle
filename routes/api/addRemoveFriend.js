const express = require('express');
const asyncHandler = require('express-async-handler');
const { Post, Friend, User } = require('../../db/models');
const { generateToken } = require('./security-utils');
const { Op } = require("sequelize");
// const jwt = require('jsonwebtoken');
// const uuid = require('uuid').v4;

const router = express.Router();

router.post('/', asyncHandler(async function (req, res, next) {
    const { friendId, userId } = req.body
    // const userPosts = await Post.findAll({ where: { userId }, include: [ { model: User } ], order: [ ['id', 'DESC'] ]});
    // const friends = await Friend.findAll({ attributes:['friendName', 'friendId'], where: { userId } });
    const user = await User.findByPk(userId)
    const friend = await User.findByPk(friendId)

    res.json({ user, friend })
    return
}));





module.exports = router;