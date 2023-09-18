import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import { Landing } from './pages/landing/landing';

function App() {

  return (
    <div>
      <ShopContextProvider>

            <Navbar />

            <Routes>

              <Route path='/' element={ <Landing /> } />

              <Route path='/shop' element={ <Shop /> } />

              <Route path="/cart" element={ <Cart /> } />

            </Routes>

      </ShopContextProvider>
    </div>
  )
}

export default App;
