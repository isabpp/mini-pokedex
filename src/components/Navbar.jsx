import '../App.css';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="bg-cyan-300">
            <div className="flex flex-row items-center">
                <h1 className='font-jersey text-[50px]'>Mini Pokédex</h1>
                <img src="https://www.pngarts.com/files/3/Pokeball-PNG-Transparent-Image.png" className="size-[50px] ml-3"></img>
            </div>
            
            <ul className="ul-container">
                <li><NavLink to="/locations">Locations</NavLink></li>
                <li><NavLink to="/">Pokémon</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
