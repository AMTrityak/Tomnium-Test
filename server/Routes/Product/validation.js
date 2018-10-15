const errorMsg = require('../../Helpers/error-msg');
const resHandler = require('../../Helpers/response');

exports.productValidation = () => {
    return (req, res, next) => {
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;
        const createBy = req.body.createdBy;
        if(!name){
            return resHandler(res, 400, true, errorMsg.MissingProductName)
        }
        if(!price){
            return resHandler(res, 400, true, errorMsg.MissingPrice)
        }
        if(!description){
            return resHandler(res, 400, true, errorMsg.MissingDescription)
        }
        if(!createBy){
            return resHandler(res, 400, true, errorMsg.MissingCreateBy)
        }
        next()
    }
};