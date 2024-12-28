const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

let info = [
    {
        username: 'sample',
        img: '',
        comment: 'sample comment !!!!!!!!!'
    }
]

app.get('/', (req, res) => {

    res.render('home', {info});
})

app.get('/:username', (req, res) => {
    res.send('Hello')
})

app.listen(1234, () =>{
    console.log('Listening from port 1234!!!!')
})