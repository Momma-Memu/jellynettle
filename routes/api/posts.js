const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { Post, Friend, User } = require('../../db/models');
const { generateToken } = require('./security-utils');
// const jwt = require('jsonwebtoken');
// const uuid = require('uuid').v4;

const router = express.Router();

router.post('/', asyncHandler(async function (req, res, next) {
    const { id } = req.body
    const userId = Number(id)
    const userPosts = await Post.findAll({ where: { userId }, include: [ { model: User } ], order: [ ['id', 'DESC'] ]});
    const friends = await Friend.findAll({ attributes:['friendName', 'friendId'], where: { userId } });
    const friendIds = friends.map(friend => {
        return friend.friendId
    })

    const friendPosts = await Post.findAll({ where: { userId:friendIds }, include: [ { model: User } ] });

    res.json({ userPosts, friendPosts: friendPosts })
    return
}));

router.post('/make', asyncHandler(async function (req, res, next){
    const { id, message } = req.body;
    if(!id || !message){
        res.json( { success: false, message: 'Uh oh...Something went wrong.' } )
    }
    const data = { userId: id, message, likeCount: 0  }
    const post = await Post.create(data);
    const newPost = await Post.findByPk(post.id, {include: [ { model: User } ] })
    if(post){
        res.json(newPost)
    } else {
        res.json( { success: false, message: 'Uh oh...Something went wrong.' } )
    }
}));





module.exports = router;