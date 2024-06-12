const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema(
    {
        brand: String,
        name: String,
        price: Number,
        type: String,
        rating: {type: Number, max: 5},
        features:[{type:String}],
        description: String,
        img: String,
        size: String,
        available: String,
        color: String
    },
    {timeStamp:true}
);

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;