import React, { useState } from 'react'
import { FaBasketShopping } from 'react-icons/fa6'

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
        <span className="logo">Гэрийн тавилгууд</span>
        <ul className="nav">
          <li>Бидний тухай</li>
          <li>Контакт</li>
          <li>Кабинет</li>
        </ul>
        <FaBasketShopping
          onClick={() => setCartOpen((cartOpen) => !cartOpen)}
          className={`shop-cart-button ${cartOpen && 'active'}`}
        />
        {cartOpen && <div className="shop-cart"></div>}
      </div>
      <div className="presentation"></div>
    </header>
  )
}
