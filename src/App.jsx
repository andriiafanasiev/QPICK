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
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
      toast.success(`${product.name} was added to cart`, { autoClose: 2000 });

      const updatedCart = [...cartItems, product];
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };
  const handleRemoveFromCart = (product) => {
    toast.success(`${product.name} was removed from cart`, { autoClose: 2000 });
    const updatedCart = cartItems.filter((cartItem) => {
      return cartItem.id !== product.id;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="App">
      <ToastContainer />
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
