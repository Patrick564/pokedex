class GetPokemonData {
    getStats(pokemon) {
        let stats = {
            id: pokemon.id,
            name: pokemon.name,
            weight: pokemon.weight,
            height: pokemon.height,
            abilities: [],
            types: [],
            sprites: {
                front_default: pokemon.sprites.front_default,
                front_shiny: pokemon.sprites.front_shiny,
            },
            stats: {
                hp: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                special_attack: pokemon.stats[3].base_stat,
                special_defense: pokemon.stats[4].base_stat,
                speed: pokemon.stats[5].base_stat,
            },
        };
    
        // Get all abilities of that pokemon
        for (let ability of pokemon.abilities) {
            stats.abilities.push(ability.ability.name);
        }
    
        // Get all types of that pokemon
        for (let type of pokemon.types) {
            stats.types.push(type.type.name);
        }
    
        return stats;
    }

    getSpecies(pokemon) {
        let description = pokemon.flavor_text_entries;
        let species = {
            description: pokemon.flavor_text_entries[0].flavor_text,
            // evolution_chain: pokemon.evolution_chain.url,
        };
    
        return species;
    }
}

module.exports = GetPokemonData;
