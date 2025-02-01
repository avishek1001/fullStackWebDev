const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    comments: {
        type: [String],
    },
    upvote: {
        type: Number
    },
    downvote: {
        type: Number
    },
    loggedIn: {
        type: Boolean
    }
})

const User = mongoose.model('Users', userSchema);

module.exports = User;