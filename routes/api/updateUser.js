const express = require('express');
const asyncHandler = require('express-async-handler');
const { Post, Friend, User } = require('../../db/models');
const { generateToken } = require('./security-utils');
const bcrypt = require('bcryptjs');
const { Op } = require("sequelize");

const router = express.Router();

router.post('/description', asyncHandler(async function (req, res, next) {
    const { id, description } = req.body

    const update = await User.update({ description: description }, { where:  { id: id } })
    const user = await User.findOne({ attributes:['description'], where: { id }})
    res.json({ description: user.description })
    return
}));

router.put('/full', asyncHandler(async function (req, res, next) {
    let { id, fullName, userName, email, password, confirmPassword, gender } = req.body;

    if(password !== undefined){
        if(password !== confirmPassword){
            res.json({ succcess: false, message: 'New passwords do not match.' });
            return;
        };
        password = bcrypt.hashSync(password)
    };
    const content = [ {fullName}, {userName}, {email}, {password}, {gender} ];
    const keys = ['fullName', 'userName', 'email', 'password', 'gender']
    const validContent = []
    for(let i = 0; i < content.length; i++){
        let obj = content[i]
        let key = keys[i]
        if(obj[key] !== undefined){
            validContent.push(obj)
        }
    }

    if(email !== undefined){
        const usedEmail = await User.findOne({ where: { email } });
        if(usedEmail){
            res.status(403).json({success: false, message: 'An account with this email already exists.' });
            return;
        }
    }

    for(let i = 0; i < validContent.length; i++){
        const value = validContent[i];
        const update = await User.update(value, { where:  { id: id } })
    }


    res.json({ success: 'User info updated successfully', validContent: validContent })
}))

module.exports = router;
