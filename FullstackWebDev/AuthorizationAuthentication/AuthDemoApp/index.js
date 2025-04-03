const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

const User = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/usersAuthDemo');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(session({secret: 'notagoodsecret'}));

const requireLogin = (req, res, next) => {
    if(!req.session.user_id){
        return res.redirect('/login');
    }
    next();
}

app.get('/', (req, res) => {
    res.send('This is home');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 12);

    const user = new User({
        username,
        password: hash
    })
    
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    const login = await bcrypt.compare(password, user.password);

    if(login){
        req.session.user_id = user._id;
        // console.log(req.session);
        res.redirect('/secret');
    } else {
        res.redirect('/login');
    }
})

app.get('/secret', requireLogin, (req, res) => {
    

    // if(!req.session.user_id){
    //     return res.redirect('/login')
    // }
    // turning it into a middleware

    res.render('secret');
})

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    // req.session.destroy() ---> destroys whole session. Should be used when session body has more than one parameter.
    res.redirect('/login');
})

app.listen(1111, () => {
    console.log('Listnening from port 1111');
})