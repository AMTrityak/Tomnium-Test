const Product = require('../../Models/productModel');

exports.postProduct = (req, res) => {
    let product = req.body;
    Product.create(product)
        .then((product) => {
            console.log('saved user', product);
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log('err',err);
            res.sendStatus(500)
        })


};

exports.getProductsById = (req, res) => {
    const productId = req.params.id;
    Product.findById(productId)
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {
            console.log(err);
            return res.sendStatus(500)
        })

};

exports.getAllProducts = (req, res) => {
    Product.find()
        .then((products) => {
                res.json(products)
            })
        .catch((err) => {
            console.log(err);
            return res.sendStatus(500)
        })
};

