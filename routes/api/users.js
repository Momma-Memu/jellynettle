const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Friend, Group, Member } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler(async function (req, res, next) {
    const { id } = req.body
    const user = await User.findByPk(id);
    const friends = await Friend.findAll({ attributes:['friendName', 'friendId'], where: { userId: id } });
    res.json({ user, friends });
}));

router.post('/friends', asyncHandler(async function (req, res, next) {
    const { id } = req.body;
    const friends = await Friend.findAll({ attributes:['friendName', 'friendId'], where: { userId: id } })

    res.json({ friends })
}));

router.post('/groups', asyncHandler(async function(req, res, next) {
    const { id } = req.body;
    const memberOf = await Member.findAll({ where: { userId: id }})
    if(memberOf.length <= 0){
        res.json({ message: 'No groups'})
        return;
    } else {
        const groupIds = memberOf.map(member => {
            return member.groupId;
        })
        // res.json({groupIds})

        const groups = await Group.findAll({ where: { id: groupIds } })
        res.json(groups)
    }

    // res.json(member)
}));

router.post('/get-groups', asyncHandler(async function(req, res, next) {
    const { id } = req.body;
    const group = await Group.findByPk(id);
    res.json([group])
}))

module.exports = router;
