const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('images'));

app.get('/', (req, res) => {
    // res.send('Hello Portfolio');
    res.render('home');
})

app.listen(1111, () => {
    console.log("Listening from 1111 !!!");
})