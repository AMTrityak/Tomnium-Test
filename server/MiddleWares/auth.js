const jwt = require('jsonwebtoken');
const config = require('../config');

exports.checkAuth = () => {
    return (req, res, next) => {
        const token =  req.headers.auth ;
        if (!token) {
            return res.sendStatus(401)
        }
        jwt.verify(token, config.secretKey, (err, decoded) => {
            if (err) {
                return res.sendStatus(401)
            }
            req.token = decoded;
            next()
        })
    }
};