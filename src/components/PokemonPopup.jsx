import '../popup.css';

function PokemonPopup({pokemon, onClose}) {
    return(
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>close</button>
                <div className="abilities">
                    <h3>Abilities</h3>
                    <div className="ability-list">
                        {pokemon.abilities.map((ability, index) => (
                            <span key={index} className="ability-badge">{ability.ability.name}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonPopup;