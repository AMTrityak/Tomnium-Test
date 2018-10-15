const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const User = require('../../Models/userModel');
const config = require('.././../config');


exports.postLogin = (req, res) => {
    if (req && (!req.body.username || !req.body.password)) {
        console.log(req.body);
        return res.sendStatus(400)
    } else {
        let username = req.body.username;
        let password = req.body.password;
        User.findOne({username: username})
            .select('password')
            .exec(function(err, user){
                if (err) {
                    console.log(err);
                    return res.sendStatus(500)
                }
                if (!user) {return res.sendStatus(401)}
                bcrypt.compare(password, user.password, function(err, valid){
                    if (err) {
                        console.log(err);
                        return res.sendStatus(500)
                    }
                    if (!valid){
                        console.log(err);
                        return res.sendStatus(401)
                    }
                    const token = jwt.encode({username: username}, config.secretKey);
                    res.send(token)
                })
            })
    }
};