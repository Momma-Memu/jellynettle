const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { User } = require('../../db/models');
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
            console.log('yes')
            // return true
            // set cookie here
            res.json({ user });
            return;
        } else {
            console.log('--------------------No')
            res.json({success: false, message: 'Password does not match a user.', status: 403});
            return
        }
    })
}));

module.exports = router;