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
    res.redirect(`/pokemon/${req.query.search}`);
});

router.get('/pokemon/:id', async (req, res) => {
    try {
        let pokemonData = await requestApi.getPokemon(req.params.id);
        let pokemonSpecies = await requestApi.getPokemonSpecies(req.params.id);

        res.render('index', {
            // id: Number(req.params.id),
            stats: getPokemonData.getStats(pokemonData),
            species: getPokemonData.getSpecies(pokemonSpecies),
        });
    } catch (error) {
        res.render('error');
    }
});

module.exports = router;
