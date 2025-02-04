const express = require('express')
const mongoose = require('mongoose');

const app = express();



app.get('/', (req, res) => {
    res.json({message: "Hello World"});
})

app.listen(5000, () => {
    console.log('Server Listening on PORT 5000');
    mongoose.connect('mongodb://localhost:27017/temp');
    console.log(mongoose.find());
    
    console.log('Connected to MongoDB');
})

