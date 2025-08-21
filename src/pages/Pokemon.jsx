import { fetchPokemon } from '../api/pokemonApi';
import React, {useState, useEffect} from 'react'; 
import PokemonCard from '../components/PokemonCard';
import { FaSearch } from "react-icons/fa";
import '../pokemon.css';

function Pokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchInput, setSearchInput] = useState("");
    const [filteredPokemon, setFilteredPokemon] = useState([]);

    useEffect(() => {
        const loadPokemon = async () => {
            try {
                const data = await fetchPokemon(20);
                setPokemon(data);
                setFilteredPokemon(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            } 
        };
        loadPokemon();
    }, []);

    useEffect(() => {
        const filtered = pokemon.filter(p =>
            p.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredPokemon(filtered);
    }, [searchInput, pokemon]); //re runs when there has been a change in searchInput or pokemon

    if (loading) return <div className='text-white'>Loading the Pokemon...</div>;
    if (error) return <div className='text-white'>Error: {error}</div>;

    return(
        <>
            <div className='pokemon-container flex flex-col justify-center items-center'>
                <div className='search-container bg-cyan-100 mt-3 p-2 flex flex-row rounded-lg items-center justify-center w-3/5'>
                    <p className='mx-3'>Searching for a specific pokémon?</p>
                    <FaSearch className='ml-3'/>
                    <input type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='bg-white mx-3 rounded-md'></input>
                </div>
                <div className='pokemon-grid flex flex-wrap flex-row items-center justify-center p-2 w-2/3'>
                    {filteredPokemon.map((p) => (
                        <PokemonCard pokemon={p} key={p.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Pokemon;