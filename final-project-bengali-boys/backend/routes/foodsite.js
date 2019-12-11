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

//recieve individual post
router.get('/:id', get_food, function(req, res) {
    res.json(res.a_food);
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
        res.status(201).json(newFood);
    }
    catch(err){
        res.status(400).json({message: err.message}); 
    }
});

//updating post
router.patch('/:id', get_food, async function(req, res) {
    if (res.body.Name != null){
        res.a_food.Name = req.body.Name;
    }
    if (req.body.Difficulty != null){
        res.a_food.Difficulty = req.body.Difficulty;
    }
    if (req.body.Ethnicity != null){
        res.a_food.Ethnicity = req.body.Ethnicity;
    }
    if (req.body.Time != null){
        res.a_food.Time = req.body.Time;
    }
    if (req.body.Image != null){
        res.a_food.Image = req.body.Image;
    }
    if (req.body.Site != null){
        res.a_food.Site = req.body.Site;
    }

    try {
        const updated_a_food = await res.a_food.save();
        res.json(updated_a_food);
    }
    catch (err){
        res.status(400).json({message: err.message});
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