const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');
const user = require('./Routes/User/index');
const login = require('./Routes/Login/index');
const product = require('./Routes/Product/index');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = config.port;
const db_url = process.env.MONGODB_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/8080';

mongoose.connect(db_url, function(){
    console.log('MongoDB connected successfully')
});

app.use(user);
app.use(login);
app.use(product);

app.listen(port, function () {
    console.log(`Server listening on port ${port}.`);
});