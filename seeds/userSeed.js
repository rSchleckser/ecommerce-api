<<<<<<< HEAD
const mongoose = require('mongoose');
const { User } = require('./models/user');
=======
const mongoose = require('mongoose')
require('dotenv').config();
const {User} = require('../models/user');
>>>>>>> 5af699387013dfc83f883a03f2c0dbffbd616de2

User.create({
    name: 'Bobby',
    email: 'bobbyHill@gmail.com',
    password: '123',
<<<<<<< HEAD
    cart: [{
=======
    cart:[{
>>>>>>> 5af699387013dfc83f883a03f2c0dbffbd616de2
        brand: "HEST",
        name: "Standard Pillow",
        price: 119,
        type: "Pillow",
        rating: 4,
        features: ["Synthetic", "Air"],
        description:
<<<<<<< HEAD
        "Inflates easily and packs down as small as a russet potato in its integrated stuff sack, making it ideal for backpacking and travel adventures",
        size: "small",
        available: true,
        color: "blue",
    }]
=======
          "Inflates easily and packs down as small as a russet potato in its integrated stuff sack, making it ideal for backpacking and travel adventures",
        size: "small",
        available: true,
        color: "blue",
      }]
>>>>>>> 5af699387013dfc83f883a03f2c0dbffbd616de2
})