const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const User = require('../../Models/userModel');
const config = require('../../config');


exports.userRegistration = (req, res) => {
    let user = User();
    user.username = req.body.username;
    let password = req.body.password;
    console.log('body', req.body);
    bcrypt.hash(password, null, null, function(err, hash){
        if (err){
            console.log('err', err);
            res.sendStatus(500)
        }
        else {
            user.password = hash;
            User.findOne({username: user.username}).exec(function(err, user){
                if(err)
                    return res.send('Error');

                if(user)
                    return res.send('User already exist');
            });
            user.save()
                .then((user) => {
                    console.log('saved user',user)
                    res.sendStatus(201)
                })
                .catch((err) => {
                    console.log('err',err);
                    res.sendStatus(500)
                })
        }
    })
};

exports.checkUser = (req, res) => {
    let auth;
    if(!req.headers['auth']) {
        return res.sendStatus(401)
    }
    try {
        auth = jwt.decode(req.headers['auth'], config.secretKey)
    }
    catch (err) {
        return res.sendStatus(401)
    }
    User.findOne({username: auth.username})
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            console.log(err);
            return res.sendStatus(500)
        })
};