const Session = require('../model/sessionModel');
const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {

    console.log('session is Logged in cookies are here:',req.cookies);
    const { ssid } = req.cookies;
    const session = Session.findOne({cookieId: ssid});
    if(session){
        next();
    }else{
        res.redirect('/login');
    }
}

sessionController.startSession = async (req, res, next) => {
    await Session.create({cookieId: res.locals.cookieId});
    const backendcookies = await Session.find({});
    console.log('cookies in database found:', backendcookies);
    next();
}

module.exports = sessionController;