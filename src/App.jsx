import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Contacts from './pages/Contacts';
import Favorites from './pages/Favorites';
import Privacy from './pages/Privacy';
import Offer from './pages/Offer';
import NoPage from './pages/NoPage';
import MainLayout from './layouts/MainLayout';
import productsArray from './data/products';
import './App.css';

function AnimatedRoutes({
  cartItems,
  products,
  handleToogleToFavorites,
  handleAddToCart,
  handleRemoveFromCart,
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<MainLayout cartItems={cartItems} products={products} />}
        >
          <Route
            index
            element={
              <PageWrapper>
                <Main
                  products={products}
                  handleToogleToFavorites={handleToogleToFavorites}
                  handleAddToCart={handleAddToCart}
                />
              </PageWrapper>
            }
          />
          <Route
            path="/cart"
            element={
              <PageWrapper>
                <Cart
                  cartItems={cartItems}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              </PageWrapper>
            }
          />
          <Route
            path="/contacts"
            element={
              <PageWrapper>
                <Contacts />
              </PageWrapper>
            }
          />
          <Route
            path="/favorites"
            element={
              <PageWrapper>
                <Favorites
                  products={products}
                  handleToogleToFavorites={handleToogleToFavorites}
                  handleAddToCart={handleAddToCart}
                />
              </PageWrapper>
            }
          />
          <Route
            path="/privacy"
            element={
              <PageWrapper>
                <Privacy />
              </PageWrapper>
            }
          />
          <Route
            path="/offer"
            element={
              <PageWrapper>
                <Offer />
              </PageWrapper>
            }
          ></Route>
        </Route>
        <Route
          path="*"
          element={
            <PageWrapper>
              <NoPage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

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
    toast.success(`${product.name} removed from cart`, { autoClose: 2000 });
    const updatedCart = cartItems.filter(
      (cartItem) => cartItem.id !== product.id
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <AnimatedRoutes
          cartItems={cartItems}
          products={products}
          handleToogleToFavorites={handleToogleToFavorites}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </Router>
    </div>
  );
}

export default App;
