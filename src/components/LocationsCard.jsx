import '../locations.css';

function LocationsCard({location}) {
    return (
        <div className="bg-[#95f599] m-10 rounded-md p-3 min-w-3xs">
            <h3 className="text-xl font-medium uppercase">{location.name}</h3>
            <p>In city: {location.location.name}</p>
            <div className="">
                {location.pokemon_encounters.map((locInfo, index) => (
                    <span key={index} className="">
                        {locInfo.pokemon.name}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default LocationsCard;