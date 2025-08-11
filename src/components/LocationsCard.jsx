import '../locations.css';

function LocationsCard({location}) {
    return (
        <div className="bg-[#95f599] m-10 rounded-md p-3 min-w-2xs max-w-80">
            <h3 className="text-xl font-medium uppercase">{location.name}</h3>
            <p>In city: {location.location.name}</p>
            <p>Pokemons you can encounter: </p>
            <div className="flex flex-wrap">
                {location.pokemon_encounters.map((locInfo, index) => (
                    <span key={index} className="p-1 m-1 bg-[#bdffbf] rounded-sm capitalize">
                        {locInfo.pokemon.name}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default LocationsCard;