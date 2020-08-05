const express = require('express');
const router = express.Router();

const Api = require('../api');
const Data = require('../data');

const requestApi = new Api();
const getPokemonData = new Data();


router.get('/', (req, res) => {
    res.redirect('/pokemon/1');
});

router.get('/search', (req, res) => {
    let id = req.query.search;

    if (isNaN(id)) {
        id = id.toLowerCase();
    }

    res.redirect(`/pokemon/${id}`);
});

router.get('/pokemon/:id', async (req, res) => {
    let id = req.params.id;

    if (isNaN(id)) {
        id = id.toLowerCase();
    }

    try {
        let pokemonData = await requestApi.getPokemon(id);
        let pokemonSpecies = await requestApi.getPokemonSpecies(id);

        res.render('index', {
            stats: getPokemonData.getStats(pokemonData),
            species: getPokemonData.getSpecies(pokemonSpecies),
        });
    } catch (error) {
        res.render('error');
    }
});

module.exports = router;
