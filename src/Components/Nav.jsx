import logo from '../iconsAssets/Logo .png';
import '../index.css';
import { Link } from 'react-router-dom';

export default function Nav() {
    const logoSrc = logo;
    return(
    <div>
        <nav className='navbar'>
            <Link to="/" className="logo-link">
                <img 
                    src={logoSrc} 
                    alt="Little Lemon Logo" 
                    className="navbar-logo"
                />
            </Link>
            <div className="nav-links">
                <Link to="/">HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/menu'>MENU</Link>
                <Link to="/reservation">RESERVATION</Link>
                <Link to='/order-online'>ORDER ONLINE</Link>
                <Link to='/login'>LOGIN</Link>
            </div>
        </nav>
    </div>
    )
}