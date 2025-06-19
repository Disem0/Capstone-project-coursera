import headPhoto from '../iconsAssets/restauranfood.jpg';
import Nav from './Nav';
import '../index.css';
export default function Header() {
    return(
        <header>
            <Nav />
            <section className='header-container'>
                <section className='left-content'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
                </section>
                <section className="rigth-content">
                    <img  id="headPhoto" alt='header-photo' src={headPhoto} height='453px' width='300px'/>
                </section>
            </section>
        </header>
    )
}