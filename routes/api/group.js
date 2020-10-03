const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Group, Member, GroupPost } = require('../../db/models');

const router = express.Router();

router.post('/make', asyncHandler(async function (req, res, next) {
    const { ownerId, name } = req.body
    const userCount = 1;

}));

router.post('/makePost', asyncHandler(async function(req, res, next) {
    const { groupId, userId, message } = req.body;
    const likeCount = 0;
    const data = { groupId, userId, message, likeCount }
    const newPost = await GroupPost.create(data)

    const id = newPost.id;

    const post = await GroupPost.findOne({ where: { id }, include: [ { model: User } ] })

    res.json(post)
}));

router.post('/getPosts', asyncHandler(async function(req, res, next) {
    const { id } = req.body;

    const groupPosts = await GroupPost.findAll({ where: { groupId: id }, include: [ { model: User } ], order: [ ['id', 'DESC'] ] })

    res.json({ groupPosts })
}));


module.exports = router;
