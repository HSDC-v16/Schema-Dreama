const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
    console.log('in cookie controller:',res.locals.cookieId);
    res.cookie('ssid', res.locals.cookieId, {httpOnly: true});
    next();
}

module.exports = cookieController;