const mongoose = require('mongoose');
<<<<<<< HEAD
const cart = require('./cart');
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        cart: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'cart'
        }]
    }
);

const User = mongoose.model('User', userSchema );
=======
const Cart = require('./cart')

const userSchema = new mongoose.Schema(
    {
        name:{type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},  
        cart: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cart'}]
    }
)

const User = mongoose.model('User', userSchema);
>>>>>>> 5af699387013dfc83f883a03f2c0dbffbd616de2

module.exports = User;