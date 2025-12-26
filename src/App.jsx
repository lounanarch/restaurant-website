import {React, useState} from "react";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import LoginPopup from "./components/popup/loginpopup";

// ✅ Import your pages
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import PlaceOrder from "./pages/placeorder/placeorder";
import loginpopup from "./components/popup/loginpopup";

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      {/* Navbar is shown on all pages */}
      <Navbar setShowLogin={setShowLogin} />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
    </>
    
  );
};

export default App;
