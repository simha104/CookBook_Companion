const fs = require('fs');
const express = require('express')

let food_data = fs.readFileSync('food.json');
app.get('/food_data', function (req, res) {
    res.json(food_data);
})