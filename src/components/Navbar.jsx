import '../App.css';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <div className="flex flex-row items-center">
                <h1 className='text-[50px]'>Mini Pokedex</h1>
                <img src="https://www.pngarts.com/files/3/Pokeball-PNG-Transparent-Image.png" className="size-[50px] ml-3"></img>
            </div>
            
            <ul className="ul-container">
                <li><NavLink to="/locations">Locations</NavLink></li>
                <li><NavLink to="/">Pokemon</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
