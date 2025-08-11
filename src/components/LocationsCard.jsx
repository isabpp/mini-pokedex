import '../locations.css';

function LocationsCard({location}) {
    return (
        <div className="bg-[#95f599] m-10 rounded-md p-3">
            <h3>{location.name}</h3>
            <p>In region: {location.region.name}</p>
        </div>
    )
}

export default LocationsCard;