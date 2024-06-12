const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema(
    {
<<<<<<< HEAD
=======
        brand: String,
>>>>>>> 5af699387013dfc83f883a03f2c0dbffbd616de2
        name: String,
        price: Number,
        type: String,
        rating: {type: Number, max: 5},
        features:[{type:String}],
        description: String,
        img: String,
        size: String,
<<<<<<< HEAD
        quantity: String,
=======
>>>>>>> 5af699387013dfc83f883a03f2c0dbffbd616de2
        available: String,
        color: String
    },
    {timeStamp:true}
);

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;