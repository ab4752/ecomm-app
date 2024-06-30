import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import About from './components/About'
import Contact from './components/Contact'

const products = [
  { id: 1, name: 'Product 1', price: 9.99, image: '/images/img1.jpeg' },
  { id: 2, name: 'Product 2', price: 39.99, image: '/images/img2.jpeg' },
  { id: 3, name: 'Product 3', price: 19.99, image: '/images/img3.jpeg' },
];

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-grow">
          <NavMenu />
          <main className="flex-grow p-4">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                }
              />
              <Route path="/product/:id" element={<ProductDetail products={products} />} />
              <Route path="/" element={<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                          {products.map(product => (
                                              <ProductCard key={product.id} product={product} />
                                          ))}
                                        </div>} />
              <Route path="contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>

  );
};

export default App;
