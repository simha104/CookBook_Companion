const express = require('express');
const router = express.Router();
const food = require('../models/foodsites');

//recieve all
router.get('/', async function(req, res) {
    try {
        const foods = await food.find();
        res.json(foods);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
});

//create a post
router.post('/', async function(req, res) {
    const a_food = new food({
        Name: req.body.Name,
        Difficulty: req.body.Difficulty,
        Ethnicity: req.body.Ethnicity,
        Time: req.body.Time,
        Image: req.body.Image,
        Site: req.body.Site
    });
    try {
        const newFood = await a_food.save();
        res.status(200).json(newFood);
    }
    catch(err){
        res.status(400).json({message: "bruh"}); 
    }
});


//deleting post
router.delete('/:id', get_food, async function(req,res) {
    try{
        await res.a_food.remove();
        res.json({message: "Deleted food"});
    }
    catch (err){
        res.status(500).json({message: err.message});
    }
});

async function get_food(req, res, next){
    let a_food;

    try{
        a_food = await food.findById(req.params.id);
        if (a_food == null){
            return res.status(404).json({message: "Cannot find food"});
        }
    }
    catch (err) {
        return res.status(500).json({message: err.message});
    }

    res.a_food = a_food;
    next();
};


module.exports = router;