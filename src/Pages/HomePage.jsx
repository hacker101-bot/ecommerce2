import { Header } from "../components/Header"
import { products } from "../data/products"
import { useState, useEffect } from "react"

export function HomePage() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || []
  })

  // quantity per product (keyed by product id)
  const [quantities, setQuantities] = useState({})

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    const quantity = quantities[product.id] || 1

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [
        ...prevCart,
        {
          id: product.id,
          quantity,
          image: product.image,
          price: product.priceCents / 100
        }
      ]
    })

    window.alert(`${product.name} added to cart!`)
  }

  return (
    <div>
      <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />

      <div className="home-page">
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-container">
              <div className="product-image-container">
                <img className="product-image" src={product.image} />
              </div>

              <div className="product-name limit-text-to-2-lines">
                {product.name}
              </div>

              <div className="product-rating-container">
                <img
                  className="product-rating-stars"
                  src={`/images/ratings/rating-${product.rating.stars * 10}.png`}
                />
                <div className="product-rating-count link-primary">
                  {product.rating.count}
                </div>
              </div>

              <div className="product-price">
                €{(product.priceCents / 100).toFixed(2)}
              </div>

              <div className="product-quantity-container">
                <select
                  value={quantities[product.id] || 1}
                  onChange={(e) =>
                    setQuantities({
                      ...quantities,
                      [product.id]: Number(e.target.value)
                    })
                  }
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <button
                className="add-to-cart-button button-primary"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
