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
            <div className="bg-green-300 mx-6 mt-8 rounded-2xl p-4 grid grid-cols-3 gap-12 justify-center items-center border-4 border-green-700">
                <h3 className="text-2xl font-medium uppercase font-jersey place-self-start">{location.name}</h3>
                <p className="font-medium place-self-start">In city: {location.location.name}</p>
                <button onClick={toggleCollapsible} className="bg-green-100 rounded-sm px-2 size-8 place-self-end">{collapsible ? '▲' : '▼'}</button>
            </div>
            {collapsible && <LocationCollapsible location={location}/>}
        </div>
            
    )
}

export default LocationsCard;