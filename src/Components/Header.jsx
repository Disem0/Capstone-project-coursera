import headPhoto from '../iconsAssets/restauranfood.jpg';
import logo from '../iconsAssets/Logo .png';
export default function Header() {
    return(
        <header>
            <nav>
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
            <section>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <img alt='header-photo' src={headPhoto} width='100px' />
                <button>Reserve a Table</button>
            </section>
        </header>
    )
}