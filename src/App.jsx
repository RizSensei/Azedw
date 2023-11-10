import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Category from "./pages/Category/Category";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Contact from "./pages/Contact/Contact";
import MyAccount from "./pages/Account/MyAccount";
import Cart from "./pages/Cart/Cart";
import WishList from "./pages/WishList/WishList";
import Checkout from "./pages/Checkout/Checkout";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Category/>} />
            <Route path="/menu/:id" element={<ProductDetail/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<PrivateRoute><WishList /></PrivateRoute>} />
            <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
