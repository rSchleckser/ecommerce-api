const mongoose = require('mongoose');
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

module.exports = User;