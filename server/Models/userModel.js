const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
        select: false
    }
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');