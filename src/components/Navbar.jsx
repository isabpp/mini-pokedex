import '../App.css';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <h1>Mini Pokedex</h1>
            <ul className="ul-container">
                <li><NavLink to="/locations">Locations</NavLink></li>
                <li><NavLink to="/">Pokemon</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
