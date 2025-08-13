import '../locations.css';
import LocationCollapsible from './LocationCollapsible';
import { useState } from 'react';

function LocationsCard({location}) {
    const [collapsible, setCollapsible] = useState(false);

    const toggleCollapsible = () => {
        setCollapsible(!collapsible);
    };

    return (
        <div className="w-2/3"> 
            <div className="bg-[#95f599] m-6 rounded-2xl p-4 pr-6 pl-6 flex flex-row justify-between border-4 border-green-800">
                <h3 className="text-xl font-medium uppercase">{location.name}</h3>
                <p>In city: {location.location.name}</p>
                <button onClick={toggleCollapsible}>{collapsible ? 'Show less' : 'Show more'}</button>
            </div>
            {collapsible && <LocationCollapsible location={location}/>}
        </div>
            
    )
}

export default LocationsCard;