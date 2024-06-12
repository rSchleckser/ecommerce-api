const mongoose = require('mongoose');
<<<<<<< HEAD
const Inventory = require('./inventory');
=======
const Inventory = require('./inventory')
>>>>>>> 5af699387013dfc83f883a03f2c0dbffbd616de2

const cartSchema = new mongoose.Schema(
    {
        item: [{type: mongoose.Schema.Types.ObjectId, ref: 'Inventory'}]
    }
);

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;