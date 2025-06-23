import GreekSalad from '../iconsAssets/greek salad.jpg';
import Bruschetta from '../iconsAssets/bruchetta.png';
import LemonDessert from '../iconsAssets/lemon dessert.jpg';
import '../index.css';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  const handleMenu = () => {
    navigate('/menu');
  }
  const handleOrderOnline = () => {
    navigate('/order-online');
  }
    return (
      <main>
        <section className='specials'>
          <section className='container-specials'>
            <h1 className='Hspecials'>This week specials!</h1>
            <button onClick={handleMenu} className="online-menu-button">Online Menu</button>
          </section>
          <section className='container-list'>
            <figure className='special-item'>
              <img alt="Greek-Salad-Photo" src={GreekSalad} width='265px' height='185px' />
              <figcaption>
                <h3>Greek Salad</h3>
                <p>$12.99</p>
                <p>Our famous Greek salad is made with fresh vegetables, feta cheese, and a tangy dressing.</p>
                <button onClick={handleOrderOnline}>Order a delivery</button>
              </figcaption>
            </figure>
            <figure className='special-item'>
              <img alt="Bruschetta-Photo" src={Bruschetta} width='265px' height='185px' />
              <figcaption>
                <h3>Bruschetta</h3>
                <p>$5.99</p>
                <p>Toasted bread topped with fresh tomatoes, basil, and balsamic glaze.</p>
                <button onClick={handleOrderOnline}>Order a delivery</button>
              </figcaption>
            </figure>
            <figure className='special-item'>
              <img alt="Lemon-Dessert-Photo" src={LemonDessert} width='265px' height='185px' />
              <figcaption>
                <h3>Lemon Dessert</h3>
                <p>$5.00</p>
                <p>A refreshing dessert with a zesty lemon filling and a buttery crust.</p>
                <button onClick={handleOrderOnline}>Order a delivery</button>
              </figcaption>
            </figure>
          </section>
        </section>
      </main>
    )
  }