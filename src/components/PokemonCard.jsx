import '../pokemon.css';
import { useState } from 'react';
import PokemonPopup from './PokemonPopup';

function PokemonCard({pokemon}) {
    const [popup, setPopup] = useState(false);

    return (
        <>
            <div className="pokemon-card" onClick={() => setPopup(true)}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pokemon-image'/>
                <h3 className="pokemon-name text-xl font-medium"> {pokemon.name}</h3>
                <div className="pokemon-types">
                    <span>type: </span>
                    {pokemon.types.map((typeInfo, index) => (
                        <span key={index} className={`type-badge type-${typeInfo.type.name}`}>
                            {typeInfo.type.name}
                        </span>
                    ))}
                </div>
            </div>
            {popup && (<PokemonPopup pokemon={pokemon} onClose={() => setPopup(false)}/>)}
        </>
    );
}

export default PokemonCard;