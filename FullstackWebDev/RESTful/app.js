const express = require('express');
const app = express();
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
uuid();

//parsing data from the form to read and use.
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')

let comments = [
    {
        id: uuid(),
        username: "skyler",
        comment: "I like birdwatching"
    },
    {
        id: uuid(),
        username: "jordan",
        comment: "Hiking is my favorite hobby!"
    },
    {   
        id: uuid(),
        username: "alex",
        comment: "I just started learning photography."
    },
    {   
        id: uuid(),
        username: "morgan",
        comment: "The mountains are so peaceful."
    },
    {
        id: uuid(),
        username: "taylor",
        comment: "Camping under the stars is magical."
    }
];

app.get('/', (req, res) => {
    res.send('This is home')
})

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new', { comments })
})

app.post('/comments', (req, res) => {
    //console.log(req.body)
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });     // req.body stores data send from a form
    //res.send('it worked');
    res.redirect('/comments');  // goes directly to GET render. It makes two consecutive request which lands it on to the GET page directly
})


app.get('/comments/:id', (req, res) => {
    
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/detail', {comment});
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    //console.log(req.body);
    //res.send('Cool')
    const newComment = req.body.comment;
    const foundCommentObj = comments.find(c => c.id === id);
    foundCommentObj.comment = newComment;
    res.redirect('/comments');
})

app.get('/comments/:id/edit', (req, res) => {
    const {id} = req.params;
    const foundCommentObj = comments.find(c => c.id === id);
    res.render('comments/edit', {foundCommentObj})
})

app.delete('/comments/:id', (req, res) => {
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.listen(8080, () => {
    console.log('listening')
})