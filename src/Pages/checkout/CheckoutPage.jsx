import { CheckoutHeader } from './CheckoutHeader'
import './checkoutPage.css'
import { useState, useEffect } from 'react'
import { products } from "./products";
 // Make sure this path is correct

export function CheckoutPage() {
  const [cart, setCart] = useState([])

  // Load cart from localStorage on page load
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(savedCart)
  }, [])

  const updateQuantity = (productId, newQty) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQty } : item
    )
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const deleteItem = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  // Only display products that are in localStorage cart
  const cartProducts = products.filter((product) =>
    cart.some((cartItem) => cartItem.id === product.id)
  )

  // Merge quantity from cart into the filtered products
  const displayCart = cartProducts.map((product) => {
    const cartItem = cart.find((item) => item.id === product.id)
    return { ...product, quantity: cartItem.quantity }
  })

  const totalItems = displayCart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = displayCart.reduce((sum, item) => sum + item.quantity * (item.priceCents / 100), 0)
  const shipping = subtotal > 50 ? 0 : 4.99
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {displayCart.length === 0 && <div>Your cart is empty.</div>}

            {displayCart.map((item) => (
              <div className="cart-item-container" key={item.id}>
                <div className="cart-item-details-grid">
                  <img className="product-image" src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <div className="product-name">{item.name}</div>
                    <div className="product-price">€{(item.priceCents / 100).toFixed(2)}</div>
                    <div className="product-quantity">
                      Quantity: {item.quantity}
                      <span
                        className="update-quantity-link link-primary"
                        onClick={() => {
                          const newQty = parseInt(prompt('Enter new quantity:', item.quantity))
                          if (newQty > 0) updateQuantity(item.id, newQty)
                        }}
                      >
                        Update
                      </span>
                      <span
                        className="delete-quantity-link link-primary"
                        onClick={() => deleteItem(item.id)}
                      >
                        Delete
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="payment-summary">
            <div className="payment-summary-title">Payment Summary</div>

            <div className="payment-summary-row">
              <div>Items ({totalItems}):</div>
              <div className="payment-summary-money">€{subtotal.toFixed(2)}</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">€{shipping.toFixed(2)}</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">€{(subtotal + shipping).toFixed(2)}</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">€{tax.toFixed(2)}</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">€{total.toFixed(2)}</div>
            </div>

            <button
              className="place-order-button button-primary"
              onClick={() => alert('Order placed!')}
            >
              Place your order
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
