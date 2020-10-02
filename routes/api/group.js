const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Group, Member } = require('../../db/models');

const router = express.Router();

router.post('/make', asyncHandler(async function (req, res, next) {
    const { ownerId, name } = req.body
    const userCount = 1;

}));



module.exports = router;
