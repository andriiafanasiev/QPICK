import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Contacts from './pages/Contacts';
import Favorites from './pages/Favorites';
import Privacy from './pages/Privacy';
import NoPage from './pages/NoPage';
import MainLayout from './layouts/MainLayout';

import './App.css';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="/cart" element={<Cart cartItems={cart} />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/privacy" element={<Privacy />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
