import React, { createContext, useState, useContext, useEffect } from 'react';


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex(item => item.id === product.id);
      if (productIndex >= 0) {
      
        const updatedCart = [...prevCart];
        updatedCart[productIndex].quantity += 1;
        return updatedCart;
      } else {
       
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

 
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

 
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

 
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  
  const getCartSummary = () => {
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    return { totalQuantity, totalAmount };
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, getCartSummary }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
