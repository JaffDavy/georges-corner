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
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
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