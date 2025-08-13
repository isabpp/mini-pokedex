import '../locations.css';

function LocationsCard({location}) {
    return (
        <div className="bg-[#95f599] m-6 rounded-2xl p-4 pr-6 pl-6 w-2/3 flex flex-row justify-between border-4 border-green-800">
            <h3 className="text-xl font-medium uppercase">{location.name}</h3>
            <p>In city: {location.location.name}</p>
            <button>more</button>
        </div>
    )
}

export default LocationsCard;