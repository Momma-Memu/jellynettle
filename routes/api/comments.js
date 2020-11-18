const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { Post, Friend, User, Comment } = require('../../db/models');
const { generateToken } = require('./security-utils');
// const jwt = require('jsonwebtoken');
// const uuid = require('uuid').v4;

const router = express.Router();

router.post('/get', asyncHandler(async function (req, res, next) {
    const { id } = req.body
    const postId = Number(id)
    const comments = await Comment.findAll({ where: { postId }, include: [ { model: User } ], order: [ ['id', 'DESC'] ]});

    res.json(comments)
}));

router.post('/make', asyncHandler(async function (req, res, next){

}));





module.exports = router;