const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Friend } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler(async function (req, res, next) {
    const { id } = req.body
    const user = await User.findByPk(id);
    const friends = await Friend.findAll({ attributes:['friendName', 'friendId'], where: { userId: id } });
    res.json({ user, friends });
}));

module.exports = router;
