import './index.css';
import HomePage from './Components/Pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import ReservationPage from './Components/Pages/ReservationPage';
import About from './Components/Pages/About';
import Menu from './Components/Pages/Menu';
import OrderOnline from './Components/Pages/OrderOnline';
import Login from './Components/Pages/Login';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
