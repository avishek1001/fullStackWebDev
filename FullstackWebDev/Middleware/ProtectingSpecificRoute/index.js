const express = require('express');
const morgan = require('morgan');
const app = express();

app.get('/', (req, res) => {
    res.send('hello');
})

app.use(morgan('tiny'))

const validator = (req, res, next) => {
    const { password } = req.query;
    if(password === 'hello') {
        next();
    }
    res.send('Wrong Password');
};

app.get('/dogs', (req, res) => {
    console.log('Woof');
    res.send('Woof Woof');
})

// Passing middleware as a callback function

app.get('/secret', validator, (req, res) => {
    res.send('Secret');
})

app.use((req, res) => {
    res.send('Not Found');
})

app.listen(1112, () => {
    console.log('listening from port 1112');
})
