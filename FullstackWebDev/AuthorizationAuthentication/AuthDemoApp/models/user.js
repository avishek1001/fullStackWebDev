const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/usersAuthDemo');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
})

module.exports = mongoose.model('User', userSchema);