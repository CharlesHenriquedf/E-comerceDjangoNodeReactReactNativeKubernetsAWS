const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A product name is required']
    },
    price: {
        type: Number,
        required: [true, 'A product price is required']
    }
    // Outros campos...
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
