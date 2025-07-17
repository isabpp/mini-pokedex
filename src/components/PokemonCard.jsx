function PokemonCards(pokemon) {
    return (
        <div className="pokemon-card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <p>{pokemon.name}</p>
        </div>
    );
}