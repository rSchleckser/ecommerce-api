const mongoose = require('mongoose')
require('dotenv').config();
const {User} = require('../models/user');

User.create({
    name: 'Bobby',
    email: 'bobbyHill@gmail.com',
    password: '123',
    cart:[{
        brand: "HEST",
        name: "Standard Pillow",
        price: 119,
        type: "Pillow",
        rating: 4,
        features: ["Synthetic", "Air"],
        description:
          "Inflates easily and packs down as small as a russet potato in its integrated stuff sack, making it ideal for backpacking and travel adventures",
        size: "small",
        available: true,
        color: "blue",
      }]
})