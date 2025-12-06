import { createContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (service) => {
    setCartItems((prev) => [...prev, service]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((item, i) => i !== index));
  };

  return (
    <CounterContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
