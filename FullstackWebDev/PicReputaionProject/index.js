const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/users')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Oops Error Occurred");
        console.log(err);
    })

const User = require('./models/user');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    //res.send('Hello Picture Perfect');
    res.render('forms/login');
})

app.post('/', async (req, res) => {
    // console.log(req.body);
    const { username, password } = req.body;
    const foundUser = await User.findOne({ username: username });
    if (foundUser) {
        if (foundUser.password === password) {
            // console.log(req.body);
            res.render('others/main', {username});
        } else {
            res.send('Wrong Password')
        }
    } else {
        res.send('Username does not exist');
    }
})

app.get('/signup', (req, res) => {
    //res.send('Hello Picture Perfect');
    res.render('forms/signup');
})

app.post('/signup', async (req, res) => {
    //res.send('Hello Picture Perfect');
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        res.send('User Already Exists. Try another username');
    } else {
        const newUser = new User({
            username: username,
            password: password
        });
        await newUser.save();
        console.log(req.body);
        res.redirect('/');
    }

})

// app.get('/main', (req, res) => {
//     console.log(req.body);
//     res.send('Successful Login');
// })


app.listen(1111, () => {
    console.log("Listening from port 1111");
})