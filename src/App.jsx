import { useState } from 'react'
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';

import './App.css'

function App() {
  

  return (
   
      <CartProvider>
      <div className="app">
        <h1 >Shop With Stylo</h1>
        <ProductList />
        <CartPage />
      </div>
    </CartProvider>
    
  )
}

export default App
