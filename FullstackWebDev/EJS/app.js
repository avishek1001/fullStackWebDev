const express = require('express');
const app = express();
const redditData = require('./data.json')

//console.log(redditData)

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('template.ejs')
})

app.get('/rand', (req, res) => {
    const rand = Math.floor(Math.random() * 10);
    res.render('random', {num: rand});
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    res.render('subreddit', {...data});
})

app.listen(1111, () => {
    console.log('Listening!!!')
})