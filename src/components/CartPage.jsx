import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getCartSummary } = useCart();
  const { totalQuantity, totalAmount } = getCartSummary();

  return (
    <div className="cart-page">
      <h2>YOUR CART</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p><strong>Price: ${item.price}</strong></p>
                <p>Quantity: {item.quantity}</p>
                
                <div>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                 
                </div>
              </div>
              <p style={{ marginLeft: '20px' }}><strong>Total: ${(item.price * item.quantity).toFixed(2)}</strong></p>
              
            </div>

          ))}
           <hr className="divider" />
          <div className="cart-summary">
            <h3>Total Quantity: {totalQuantity}</h3>
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default CartPage;
