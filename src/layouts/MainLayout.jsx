import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function MainLayout({ products, cartItems }) {
  return (
    <>
      <Header products={products} cartItems={cartItems} />
      <main className="flex-1 basis-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
