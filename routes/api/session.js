const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { User } = require('../../db/models');
const { generateToken } = require('./security-utils');
// const jwt = require('jsonwebtoken');
// const uuid = require('uuid').v4;

const router = express.Router();

router.post('/', asyncHandler(async function (req, res, next) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } });
    if(!user){
        res.json({success: false, message: 'Your credentials do not match a user in our system.', status: 403});
        // res(403)
        return;
    }
    const compare = await bcrypt.compare(password, user.password, function(err, isMatch){
        if(isMatch){
            // return true
            // set cookie here
            const {jti, token} = generateToken(user)
            user.tokenId = jti;
            res.cookie('token', token);
            res.json({ id: user.id, userName:user.userName });
            return;
        } else {
            res.json({success: false, message: 'Password does not match a user.', status: 403});
            return
        }
    })
}));


router.post('/make', asyncHandler(async function (req, res, next) {
    let {fullName, email, password, confirmPassword, userName, dob, gender } = req.body;
    if(password !== confirmPassword){
        res.status(403).json({success: false, message: 'Passwords do not match.' });
        return;
    }
    const usedEmail = await User.findOne({ where: { email } });
    if(usedEmail){
        res.status(403).json({success: false, message: 'An account with this email already exists.' });
        return;
    }

    const usedUserName = await User.findOne({where: { userName }})
    if(usedUserName){
        res.status(403).json({success: false, message: 'An account with this user name already exists.' });
        return;
    } else {
        password = bcrypt.hashSync(password)
        const data = { fullName, email, password, userName, dob, gender }
            const user = await User.create(data);
            const {jti, token} = generateToken(user)
            user.tokenId = jti;
            res.cookie('token', token);
            res.status(201).json({ id: user.id, userName: user.userName });
    }
    return;
}))
router.post('/check', asyncHandler(async function (req, res, next) {
    const { id, password } = req.body;
    const user = await User.findByPk(id)
    const compare = await bcrypt.compare(password, user.password, function(err, isMatch){
        if(isMatch){
            res.json({ success: true, message: 'Passwords match'});
            return;
        } else {
            res.json({success: false, message: 'Password does not match the user.', status: 403});
            return
        }
    })

}))


module.exports = router;