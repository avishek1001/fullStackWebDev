const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/greet', (req, res) => {
    //console.log(req.cookies);
    const { name } = req.cookies;
    res.send(`Hey, ${name}`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Constantine');
    res.cookie('type', 'Warlock');
    res.send('setname Route Working');
})

app.listen(9000, () => {
    console.log('Listening from port 9000!!!!');
})