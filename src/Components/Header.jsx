
import headPhoto from '../iconsAssets/restauranfood.jpg';
import '../index.css';
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const navigate = useNavigate();
    const handleReservation = () => {
        navigate('/reservation');
    }
    return(
        <header>
            <section className='header-container'>
                <section className='left-content'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button onClick={handleReservation} className="reserve-button">
                        Reserve a Table
                    </button>
                </section>
                <section className="right-content">
                    <img  id="headPhoto" alt='header-photo' src={headPhoto} height='453px' width='300px'/>
                </section>
            </section>
        </header>
    )
}