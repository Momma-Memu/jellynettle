const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Group, Member, GroupPost, GroupRequest } = require('../../db/models');

const router = express.Router();

router.post('/make', asyncHandler(async function (req, res, next) {
    const { name, description, ownerId } = req.body
    const userCount = 1;
    const data = { name, description, ownerId, userCount }

    const newGroup = await Group.create(data)

    const groupId = newGroup.id;
    const userId = ownerId;
    const memberData = {groupId, userId}

    const member = await Member.create(memberData)

    res.json(newGroup)

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

router.post ('/getMembers', asyncHandler(async function(req, res, next) {
    const { groupId } = req.body;

    const members = await Member.findAll({where: { groupId }})

    const userIds = members.map(member => {
        return member.userId
    })

    const users = await User.findAll({ where: {id: userIds}})

    res.json(users)
}));

router.post('/request', asyncHandler(async function(req, res, next) {
    const { userId, userName, groupId } = req.body;
    const data = { userId, userName, groupId }
    const groupRequest = await GroupRequest.create(data)

    res.json(groupRequest)
}));

router.post('/getGroupRequests', asyncHandler(async function(req, res, next) {
    const { ownerId } = req.body;

    const groups = await Group.findAll({ where: { ownerId }});

    const groupIds = groups.map(group => {
        return group.id;
    })

    const requests = await GroupRequest.findAll({ where: { groupId: groupIds }, include: [ { model: Group } ] })

    res.json(requests)

}));

router.post('/acceptJoin', asyncHandler(async function(req, res, next) {
    const { groupId, userId } = req.body;

    const deleteRequest = await GroupRequest.destroy({ where: { groupId, userId } })

    const data = { groupId, userId }
    const member = await Member.create(data);

    const group = await Group.findByPk(groupId);

    const userCount = group.userCount += 1;
    console.log(`------------${userCount}`)

    const update = await Group.update({userCount: userCount}, { where: { id: groupId } })

    res.json({ message: 'Maybe it worked?' })
}));

router.post('/declineJoin', asyncHandler(async function(req, res, next) {
    const { groupId, userId } = req.body;

    const deleteRequest = await GroupRequest.destroy({ where: { groupId, userId } })

    res.json({ message: 'declined request worked.' })
}));


module.exports = router;
