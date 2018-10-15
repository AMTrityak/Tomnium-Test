const errorMsg = require('../../Helpers/error-msg');
const resHandler = require('../../Helpers/response');


exports.validationRegistr = () => {
    return (req, res, next) => {
        const username = req.body.username;
        const password = req.body.password;

        if(!username){
            return resHandler(res, 400, true, errorMsg.MissingName)
        }
        if(username.length < 4){
            return resHandler(res, 400, true, errorMsg.ShortName)
        }
        if(!password){
            return resHandler(res, 400, true, errorMsg.MissingPassword)
        }
        if(password.length < 5){
            return resHandler(res, 400, true, errorMsg.ShortPassword)
        }
        next()
    }
};