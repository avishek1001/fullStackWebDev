const express = require('express')
const app = express()

// cannot use app.use and .send becuase it can only be run once

// app.use((req, res) => {
//     console.log('We got a new request');
//     //res.send('Sending request')   
// })



app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);    //req.params is a object which contains {subreddit: 'whatever the substitute is in ":subreddit"'}
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params;     // destrucuring the req.params object
    res.send(`<h1> You're viewing subreddit of ${subreddit} and the postId ${postId}`);
})


app.get('/', (req, res) => {
    res.send('<h1>Welcome Home</h1><h2>Available paths<h2><ul><li>/cats</li><li>/dogs</li></ul>')
})

app.get('/cats', (req, res) => {
    res.send('<h1>Meoww!!</h1>')
})

app.get('/dogs', (req, res) => {
    res.send('<h1>Woofff!!</h1>')
})

app.get('*', (req, res) => {
    res.send('<h1>Path not available</h1>')
})


app.listen(3000, () => {
    console.log('Listening')
})