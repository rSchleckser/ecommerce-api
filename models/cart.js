const mongoose = require('mongoose');
const Inventory = require('./inventory');

const cartSchema = new mongoose.Schema(
    {
        item: [{type: mongoose.Schema.Types.ObjectId, ref: 'Inventory'}]
    }
);

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;