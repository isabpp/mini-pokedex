import '../popup.css';

function PokemonPopup({pokemon, onClose}) {
    return(
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="title-bar">
                    <h2 className="text-xl font-medium">{pokemon.name}</h2>
                    <button className="close-btn" onClick={onClose}>close</button>
                </div>
                <div className="pokemon-container flex flex-row">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-2/5"/>
                    <div className="information-container flex flex-col w-3/5 m-2">
                        <div className="abilities m-2">
                            <h3 className="text-xl font-medium bg-[#dbdaa0] rounded-md">Abilities</h3>
                            <div className="ability-container mt-2">
                                {pokemon.abilities.map((ability, index) => (
                                    <span key={index} className="ability-badge">{ability.ability.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className="stats m-2">
                            <h3 className="text-xl font-medium bg-[#dbdaa0] rounded-md">Stats</h3>
                            <div className="stat-container flex flex-wrap mt-2">
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