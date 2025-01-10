const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Oops Error Occurred");
        console.log(err);
    })

// Correct way of writing a Schema.
// required is a "schema type option"
// if "required = true", then the field must no be empty
// by default "required = false"
// for setting defaults use "default" schema type option

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        default: 10
    }
})

const Product = mongoose.model('Product', productSchema);

// const bike = new Product({
//     name: "Husky",
//     qty: "30"
// })
// bike.save()
Product.findOneAndUpdate({name: "Husky"}, {qty: 69}, {new: true, runValidators: true})
    .then(res => {
        console.log("Working");
        console.log(res);
    })
    .catch(e => {
        console.log("The error is: ", e);
    })