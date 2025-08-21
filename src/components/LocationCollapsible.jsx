function LocationCollapsible({location}) {

    return(
        <div className="flex items-center bg-cyan-200 mx-6 rounded-2xl p-4 pr-6 pl-6 border-4 border-gray-500">
            <p className="text-lg font-medium">Pokémon that can be found in the area:</p>
            <div className="flex flex-wrap">
                {location.pokemon_encounters.map((locInfo, index) => (
                    <span key={index} className="p-1 m-1 bg-green-100 rounded-sm capitalize font-medium">
                        {locInfo.pokemon.name}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default LocationCollapsible;