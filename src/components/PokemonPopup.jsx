import '../popup.css';

function PokemonPopup({pokemon, onClose}) {
    return(
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="title-bar">
                    <h2>{pokemon.name}</h2>
                    <button className="close-btn" onClick={onClose}>close</button>
                </div>
                <div className="pokemon-container">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image"/>
                    <div className="information-container">
                        <div className="abilities">
                            <h3>Abilities</h3>
                            <div className="ability-container">
                                {pokemon.abilities.map((ability, index) => (
                                    <span key={index} className="ability-badge">{ability.ability.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className="stats">
                            <h3>Stats</h3>
                            <div className="stat-container">
                                {pokemon.stats.map((statInfo, index) => (
                                    <span key={index} className="stat-badge">
                                        {statInfo.stat.name}: {statInfo.base_stat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonPopup;