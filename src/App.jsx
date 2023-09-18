import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';

function App() {

  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/react_ecommerce/shop' element={ <Shop /> } />
            <Route path="/react_ecommerce/cart" element={ <Cart /> } />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App;
