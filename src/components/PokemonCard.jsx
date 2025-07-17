function PokemonCard({pokemon}) {
    return (
        <div className="pokemon-card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pokemon-image'/>
            <p>{pokemon.name}</p>
        </div>
    );
}

export default PokemonCard;