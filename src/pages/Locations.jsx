import { fetchLocations } from "../api/pokemonApi";
import React, {useState, useEffect} from 'react'; 
import LocationsCard from "../components/LocationsCard";
import '../locations.css';

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

    if (loading) return <div className='text-white'>Loading the Locations...</div>;
    if (error) return <div className='text-white'>Error: {error}</div>;

    return(
        <>
            <div className='location-container'>
                <table className='table-fixed'>
                    <thead className="bg-[#70ba73] p-2 w-full border border-green-800">
                        <tr>
                            <th className="pr-2">Area name</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {location.map((loc) => (
                            <LocationsCard location={loc} key={loc.id} />
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Locations;