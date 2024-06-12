const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();


// models
const User = require('./models/user');
//const Cart = require('./models/cart');
const { inventory } = require('./seeds/seed');

// test data
console.log('---test User collection ---', User.find({}));

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>');
})

app.get('/info', (req, res) => {
    res.json(inventory)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})



app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})