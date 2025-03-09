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

  const handleToogleToFavorites = (product) => {
    const updatedProducts = products.map((item) =>
      item.id === product.id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  const handleAddToCart = (product) => {
    if (!cartItems.includes(product)) {
      const updatedCart = [...cartItems, product];
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };
  const handleRemoveFromCart = (product) => {
    const updatedCart = cartItems.filter((cartItem) => {
      return cartItem.id !== product.id;
    });
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainLayout cartItems={cartItems} products={products} />}
          >
            <Route
              index
              element={
                <Main
                  products={products}
                  handleToogleToFavorites={handleToogleToFavorites}
                  handleAddToCart={handleAddToCart}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              }
            />
            <Route path="/contacts" element={<Contacts />} />
            <Route
              path="/favorites"
              element={
                <Favorites
                  products={products}
                  handleToogleToFavorites={handleToogleToFavorites}
                  handleAddToCart={handleAddToCart}
                />
              }
            />
            <Route path="/privacy" element={<Privacy />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
