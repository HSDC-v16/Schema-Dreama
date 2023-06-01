const mongoose = require('mongoose')
const User = require('../model/userModel')
const bcrypt = require('bcryptjs');
//change this to User when User Model is completed
//select all User methods and change to User

const userController = {}



userController.verifyLogin = async (req, res, next) => {
    console.log(req.body, 'in the verifyUserName')
    const { username, password } = req.body
    try {
        const result = await User.findOne({ username })
        console.log('User result password when logging in:',result.password);
        
        if (!result) {
            res.redirect('/signup')
        } else {
            //const verified = await User.findOne({ username: username , password})
            if (await bcrypt.compare(password, result.password)) {
                // console.log('PASSED bcrypt compare');
                res.locals.verified = true
                res.locals.userId = result._id
                res.locals.cookieId = result._id;
                return next()
            } else {
                res.locals.verified = false
                return next()
            }
        }
    }
    catch (error) {
        return next({
            log: 'error in the verifyLogin middleware',
            message: error
        })
    }
}


userController.signUp = async (req, res, next) => {
    const { username, password } = req.body;
    
    console.log('signUp', username, password)
    
    if(username === undefined || password === undefined) {
        res.redirect('/signup');}
    else {
        try {

            console.log('sign up before call')
            const newUser = await User.create({
                username, 
                password
            });
            res.locals.user = newUser;
            res.locals.cookieId = newUser._id;
            console.log('signup in call', res.locals.user.username)
            next()         
        } catch (error) {
            next({
                log: 'error in the signUp middleware controller',
                err: error
            })         
        }
    }
}

module.exports = userController