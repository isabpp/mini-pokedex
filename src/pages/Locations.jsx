import { fetchLocations } from "../api/pokemonApi";
import React, {useState, useEffect} from 'react'; 
import LocationsCard from "../components/LocationsCard";

function Locations() {
    const [location, setLocation] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadLocations = async () => {
            try {
                const data = await fetchLocations(20);
                setLocation(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            } 
        };
        loadLocations();
    }, []);

    if (loading) return <div>Loading the Locations...</div>;
    if (error) return <div>Error: {error}</div>;

    return(
        <>
            <div className='location-container'>
                <div className='location-grid'>
                    {location.map((loc) => (
                        <LocationsCard location={loc} key={loc.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Locations;