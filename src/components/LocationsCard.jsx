import '../locations.css';

function LocationsCard({location}) {
    return (
        <div className="bg-[#95f599] m-10 rounded-md p-3 min-w-3xs">
            <h3 className="text-xl font-medium uppercase">{location.name}</h3>
            <p>In region: {location.region.name}</p>
        </div>
    )
}

export default LocationsCard;