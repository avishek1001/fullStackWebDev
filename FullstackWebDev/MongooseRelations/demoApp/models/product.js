const mongoose = require('mongoose')

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    season: {
        type: String,
        enum: ['spring', 'summer', 'fall', 'winter']
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref: 'Farm'
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;