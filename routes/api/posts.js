const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { Post, Friend } = require('../../db/models');
const { generateToken } = require('./security-utils');
// const jwt = require('jsonwebtoken');
// const uuid = require('uuid').v4;

const router = express.Router();

router.post('/', asyncHandler(async function (req, res, next) {
    const { id } = req.body
    const userId = Number(id)
    console.log(id)
    const userPosts = await Post.findAll({ where: { userId } });
    console.log(userPosts)
    // console.log(id)
    res.json({ userPosts })
    return
}));





module.exports = router;