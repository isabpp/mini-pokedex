import '../locations.css';

function LocationsCard({location}) {
    return (
        <tr className="bg-[#95f599] w-md border border-green-800">
            <td className="text-xl font-medium uppercase p-4">{location.name}</td>
            <td className="p-4">In city: {location.location.name}</td>
        </tr>
    )
}

export default LocationsCard;