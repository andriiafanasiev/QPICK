import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Contacts from './pages/Contacts';
import Favorites from './pages/Favorites';
import Privacy from './pages/Privacy';
import NoPage from './pages/NoPage';
import MainLayout from './layouts/MainLayout';
import productsArray from './data/products';
import { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem('products')) || productsArray
  );

  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout products={products} />}>
            <Route
              index
              element={<Main products={products} setProducts={setProducts} />}
            />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
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
