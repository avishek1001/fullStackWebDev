const express = require('express');
const morgan = require('morgan');
const app = express();

app.get('/', (req, res) => {
    res.send('hello');
})

app.use(morgan('tiny'))

app.use((req, res, next) => {
    const { password } = req.query;
    if(password === 'hello') {
        next();
    }
    res.send('Wrong Password');
})

app.get('/dogs', (req, res) => {
    console.log('Woof');
    res.send('Woof Woof');
})

app.use((req, res) => {
    res.send('Not Found');
})

app.listen(1111, () => {
    console.log('listening from port 1111');
})