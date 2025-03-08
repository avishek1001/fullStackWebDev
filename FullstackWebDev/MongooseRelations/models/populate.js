const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['spring', 'summer', 'fall', 'winter']
    }
})

const Product = mongoose.model('Product', productSchema);


const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})

const Farm = new mongoose.model('Farm', farmSchema);

const addProduct = async () => {
    const p = new Product({ name: 'Melon', price: 20, season: 'summer' });
    const res = await p.save();
    console.log(res);
}

// addProduct();

const addFarm = async () => {
    const f = new Farm({ name: 'Summer Farm', city: 'Wakanda', products: '67ab4531c1066f1700095ee7' })
    const res = await f.save();
    console.log(res);
}

// addFarm();

Farm.findOne({ name: 'Summer Farm' })
    .populate('products')
    .then(d => {
        console.log(d)
    });