import '../locations.css';

function LocationsCard({location}) {
    return (
        <div className="locations-card">
            <p>{location.name}</p>
            <p>In region: {location.region.name}</p>
        </div>
    )
}

export default LocationsCard;