import { Link } from 'react-router'
import './CheckoutHeader.css'
import { useState, useEffect } from 'react'

export function CheckoutHeader() {
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    // Sum quantities of all items
    const count = cart.reduce((sum, item) => sum + item.quantity, 0)
    setTotalItems(count)
  }, [])

  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src="images/logo.png" />
            <img className="mobile-logo" src="images/mobile-logo.png" />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <Link className="return-to-home-link" to="/">
            {totalItems} item{totalItems !== 1 ? 's' : ''}
          </Link>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>
  )
}
