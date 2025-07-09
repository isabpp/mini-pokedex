const base_url = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemon = async (limit = 20) => {

    try {
        const listResponse = await fetch(`${base_url}?limit=${limit}`);

        if(!listResponse.ok) {
            throw new Error(`API request failed: ${listResponse.status}`);
        }

        const listData = await listResponse.json();

        const pokemonInformation = await Promise.all(
            listData.results.map(pokemon => 
                fetch(pokemon.url).then(res => res.json())
            )
        );

        return pokemonInformation;

    } catch (error) {
        console.error('Error fetching the Pokemon ', error);
    }

};
