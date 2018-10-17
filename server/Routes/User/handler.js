const bcrypt = require('bcrypt-nodejs');
const User = require('../../Models/userModel');


exports.userRegistration = (req, res) => {
    let user = new User;
    user.username = req.body.username;
    let password = req.body.password;

    bcrypt.hash(password, null, null, function(err, hash){
        if (err){
            console.log('err', err);
            res.sendStatus(500)
        }
        else {
            user.password = hash;
            User.findOne({username: user.username})
            .then((findUser) => {
                if(findUser) {
                    return res.send('User already exist')
                }else{
                    user.save()
                    .then(() => {
                        res.sendStatus(201)
                    })
                    .catch((err) => {
                        console.log(err);
                        res.sendStatus(500)
                    })
                }
            })
            .catch((err) => {
                console.log('err',err);
                res.sendStatus(500)
            })
        }
    })
};