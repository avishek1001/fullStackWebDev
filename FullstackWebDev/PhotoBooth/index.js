const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

let info = [
    {
        username: 'sample',
        img: 'https://static.vecteezy.com/system/resources/thumbnails/006/091/020/small_2x/sample-stamp-in-rubber-style-red-round-grunge-sample-sign-rubber-stamp-on-white-illustration-free-vector.jpg',
        comments: []
    }
]


app.get('/', (req, res) => {
    //console.log(info);
    res.render('home', { info });
})

app.get('/upload', (req, res) => {
    res.render('upload');
})

app.post('/upload', (req, res) => {
    //console.log(req.body);
    const {username, img} = req.body;
    info.push({username, img, comments: []});
    res.redirect('/');
})

app.get('/r/:username', (req, res) => {
    const {username} = req.params;
    const userInfo = info.find(i => i.username === username);
    res.render('display', {userInfo});
})

app.post('/r/:username', (req, res) => {
    const {username} = req.params;
    const {comment} = req.body;
    const userInfo = info.find(c => c.username === username);
    userInfo.comments.push(comment);
    console.log(req.body);
    res.redirect(`/r/${username}`);
})

app.delete('/r/:username', (req, res) => {
    const {username} = req.params;
    let userInfo = info.find(c => c.username === username);
    if(userInfo) {
        userInfo = userInfo.comments.filter(c => c !== req.body.comments);
    }
    //console.log(req.body);
    res.redirect(`/r/${username}`);
})




app.listen(1234, () => {
    console.log('Listening from port 1234!!!!')
})