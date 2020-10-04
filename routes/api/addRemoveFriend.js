const express = require('express');
const asyncHandler = require('express-async-handler');
const { Request, User, Friend } = require('../../db/models');
const { generateToken } = require('./security-utils');
const { Op } = require("sequelize");

const router = express.Router();

router.post('/request', asyncHandler(async function (req, res, next) {
    const { toUserId, fromUserId } = req.body

    const toUser = await User.findByPk(toUserId)
    const fromUser = await User.findByPk(fromUserId)

    const toUserName = toUser.userName;
    const fromUserName = fromUser.userName

    const addFriend = await Request.create({fromUserId, toUserId, toUserName, fromUserName})

    const message = 'Your friend request was sent. Once they accept it, you will be able to chat, and see their posts on your feed.';

    res.json({ message })
    return
}));

router.post('/getRequests', asyncHandler(async function (req, res, next){
    const { id } = req.body;

    const requests = await Request.findAll({ where: { toUserId: id } })
    // const fromUserId = requests.fromUserId;

    res.json({requests})
}))

router.post('/acceptRequest', asyncHandler(async function (req, res, next) {
    const { userId, friendId } = req.body;


    const user = await User.findByPk(userId)
    const friend = await User.findByPk(friendId)

    const userName = user.userName;
    const friendName = friend.userName

    const addFriend = await Friend.create({ userName, userId, friendName, friendId })
    const addFriend2 = await Friend.create({ userName: friendName, userId: friendId, friendName: userName, friendId: userId })

    const deleteRequest = await Request.destroy({where: { toUserId: userId, fromUserId: friendId } })

    res.json({ message: 'Maybe it worked? Check db.' })

}))

router.post('/declineRequest', asyncHandler(async function (req, res, next) {
    const {userId, friendId} = req.body;

    const deleteRequest = await Request.destroy({ where: { toUserId: userId, fromUserId: friendId } });

    res.json({ message: 'maybe it worked?' })

}));

module.exports = router;
