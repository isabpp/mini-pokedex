import '../App.css';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <h1 className='text-[50px]'>Mini Pokedex</h1>
            <ul className="ul-container">
                <li><NavLink to="/locations">Locations</NavLink></li>
                <li><NavLink to="/">Pokemon</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
