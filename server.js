const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

//Import Seed
// const User = require('./models/user')
const inventory = require('./seeds/seed')

// MiddleWare
app.use('/', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/info', (req, res)=>{
    res.json(inventory)
})

app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`)
})