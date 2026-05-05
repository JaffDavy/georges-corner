import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
  setCart(prevCart => {
    const existingItem = prevCart.find(i => i.id === item.id);

    if (existingItem) {
      return prevCart.map(i =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + quantity }
          : i
      );
    }

    return [...prevCart, { ...item, quantity }];
  });
};

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const removeFromCart = (index) => {
  setCart(prevCart => {
    const item = prevCart[index];

    if (item.quantity > 1) {
      return prevCart.map((i, idx) =>
        idx === index
          ? { ...i, quantity: i.quantity - 1 }
          : i
      );
    }

    return prevCart.filter((_, idx) => idx !== index);
  });
};

  return (
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route 
      path="/menu" 
      element={<MenuPage addToCart={addToCart} totalItems={totalItems} />} 
    />
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