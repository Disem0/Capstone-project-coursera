import GreekSalad from '../iconsAssets/greek salad.jpg';
import Bruschetta from '../iconsAssets/bruchetta.png';
import LemonDessert from '../iconsAssets/lemon dessert.jpg';

export default function Main(){
    return(
        <main>
        <section className='specials'>
          <h1>This week specials</h1>
          <button>Online Menu</button>
          <figure className='special-item'>
            <img alt="Greek-Salad-Photo" src={GreekSalad} width='150px'/>
            <figcaption>
            <h3>Greek Salad</h3>
            <p>$12.99</p>
            <p>Our famous Greek salad is made with fresh vegetables, feta cheese, and a tangy dressing.</p>
            <button>Order a delivery</button>
            </figcaption>
          </figure>
          <figure className='special-item'>
            <img alt="Bruschetta-Photo" src={Bruschetta} width='150px'/>
            <figcaption>
            <h3>Bruschetta</h3>
            <p>$5.99</p>
            <p>Toasted bread topped with fresh tomatoes, basil, and balsamic glaze.</p>
            <button>Order a delivery</button>
            </figcaption>
          </figure>
          <figure className='special-item'>
            <img alt="Lemon-Dessert-Photo" src={LemonDessert} width='150px'/>
            <figcaption>
            <h3>Lemon Dessert</h3>
            <p>A refreshing dessert with a zesty lemon filling and a buttery crust.</p>
            <p>$5.00</p>
            <button>Order a delivery</button>
            </figcaption>
          </figure>
        </section>
      </main>
    )
}