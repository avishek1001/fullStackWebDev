const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methdOverride = require('method-override')

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStandTake2')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Oops Error Occurred");
        console.log(err);
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methdOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

//farm Routes

app.get('/farms/new', (req, res) => {
    res.render('farms/new');
})

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products });

})

app.get('/products/new', (req, res) => {
    // res.render('products/new');
    res.render('products/new', {categories});
})

app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect(`products/${product.id}`);
})


app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/details', { product });
})

app.delete('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.redirect(`/products`);
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
})

app.put('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    res.redirect(`/products/${product.id}`);
})



app.listen(3000, () => {
    console.log('Listening from port 3000');
})