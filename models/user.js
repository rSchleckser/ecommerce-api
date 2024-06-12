const mongoose = require('mongoose');
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

module.exports = User;