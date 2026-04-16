import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
      <Route
        path="/cart"
        element={
          <CartPage cart={cart} removeFromCart={removeFromCart} />
        }
      />
    </Routes>
  );
}

export default App;