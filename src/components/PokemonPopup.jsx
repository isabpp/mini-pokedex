import '../popup.css';

function PokemonPopup({pokemon, onClose}) {
    return(
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="title-bar">
                    <h2 className="text-3xl font-jersey font-medium">{pokemon.name}</h2>
                    <button className="close-btn" onClick={onClose}>close</button>
                </div>
                <div className="pokemon-container flex flex-row">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-2/5"/>
                    <div className="information-container flex flex-col w-3/5 m-2 bg-yellow-50 rounded-md">
                        <div className="abilities m-2">
                            <h3 className="text-3xl font-medium bg-gray-500/90 rounded-md p-1 text-white font-jersey">Abilities</h3>
                            <div className="ability-container mt-4">
                                {pokemon.abilities.map((ability, index) => (
                                    <span key={index} className="ability-badge font-medium bg-gray-200/90">{ability.ability.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className="stats m-2">
                            <h3 className="text-3xl font-medium bg-gray-500/90 rounded-md p-1 font-jersey text-white">Stats</h3>
                            <div className="stat-container flex flex-wrap mt-2">
                                {pokemon.stats.map((statInfo, index) => (
                                    <span key={index} className={`stat-badge font-medium stat-${statInfo.stat.name}`}>
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