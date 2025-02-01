const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/users')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Oops Error Occurred");
        console.log(err);
    })

const admin = new User({
    username: 'admin',
    password: 'admin',
    loggedIn: false
})

admin.save()
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log(e);
    })

