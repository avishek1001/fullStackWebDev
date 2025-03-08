const express = require('express');
const morgan = require('morgan');
const app = express();
const AppError = require('./AppError');

app.get('/', (req, res) => {
    res.send('hello');
})

app.use(morgan('tiny'))

const validator = (req, res, next) => {
    const { password } = req.query;
    if(password === 'hello') {
        next();
    }
    // res.send('Wrong Password');
    // res.status(401);
    throw new AppError("Requires Password", 401);
    
};

app.get('/dogs', (req, res) => {
    console.log('Woof');
    res.send('Woof Woof');
})

// Passing middleware as a callback function

app.get('/secret', validator, (req, res) => {
    res.send('Secret');
})

app.get('/error', (req, res) => {
    chicken.new();
})

app.get('/admin', (req, res) => {
    throw new AppError("You are not an admin", 403);
})

app.use((req, res) => {
    res.status(404).send('Not Found');
})

app.use((err, req, res, next) => {
    const {message = 'Something went Wrong', status = 401} = err;
    console.log('*****************ERROR****************');
    res.status(status).send(message);
})

app.listen(1112, () => {
    console.log('listening from port 1112');
})
