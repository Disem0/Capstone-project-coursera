import logo from '../iconsAssets/Logo .png';
import '../index.css';
export default function Nav() {
    return(
        <nav className='navbar'>
            <ul>
                    <li><a href='http://172.20.10.3:3000'><img src={logo} alt='Little-lemon-logo-image'/></a></li>
                    <li><a>HOME</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>MENU</a></li>
                    <li><a>RESERVATION</a></li>
                    <li><a>ORDER ONLINE</a></li>
                    <li><a>LOGIN</a></li>
                </ul>
            </nav>
    )
}