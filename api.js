const axios = require('axios').default;

class RequestApi {
    async getPokemon(nameId) {
        let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameId}/`);

        return pokemon.data;
    }

    async getPokemonSpecies(nameId) {
        let pokemonSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${nameId}/`);

        // console.log(pokemonSpecies.data);
        return pokemonSpecies.data;
    }
}

module.exports = RequestApi;
