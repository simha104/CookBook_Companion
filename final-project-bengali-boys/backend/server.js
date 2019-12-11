//Reference the following video on youtube for starting this server
//Link: https://www.youtube.com/watch?v=fgTGADljAeg
require('dotenv').config();

const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', function (error){
    console.error(error);
});
db.once('open', function (){
    console.log('== connected to database');
});


app.use(express.json());

const foodsite_router = require('./routes/foodsite');
app.use('/foodsite', foodsite_router);

app.listen(3000, function () {
    console.log("== Server is listening to port", 3000);
});



let food_data = fs.readFileSync('food.json');
app.get('/food_data', function (req, res) {
    res.json(food_data);
});