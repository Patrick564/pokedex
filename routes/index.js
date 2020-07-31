const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
    // res.send('index of pokedex');
});

router.get('/pokedex', (req, res) => {
    res.send('Pokedex!!');
});

module.exports = router;
