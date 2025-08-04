import '../pokemon.css';

function PokemonCard({pokemon}) {
    return (
        <div className="pokemon-card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pokemon-image'/>
            <p>{pokemon.name}</p>
            <div className="pokemon-types">
                {pokemon.types.map((typeInfo, index) => (
                    <span key={index} className={`type-badge type-${typeInfo.type.name}`}>
                        {typeInfo.type.name}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default PokemonCard;