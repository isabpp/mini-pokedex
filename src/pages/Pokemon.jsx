import { fetchPokemon } from '../api/pokemonApi';
import React, {useState, useEffect} from 'react'; 
import PokemonCard from '../components/PokemonCard';
import '../pokemon.css';

function Pokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPokemon = async () => {
            try {
                const data = await fetchPokemon(20);
                setPokemon(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            } 
        };
        loadPokemon();
    }, []);

    if (loading) return <div>Loading the Pokemon...</div>;
    if (error) return <div>Error: {error}</div>;

    return(
        <>
            <div className='pokemon-container'>
                <div className='pokemon-grid'>
                    {pokemon.map((p) => (
                        <PokemonCard pokemon={p} key={p.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Pokemon;