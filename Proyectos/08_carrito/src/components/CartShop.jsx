import { useState } from 'react'
import { CartArticle } from './CartArticles'
import { useCart } from '../hooks/useCart'

export function CartShop () {
  const [switchCart, setSwitchCart] = useState(false)
  const { cart } = useCart()

  const handleSwitchCart = () => {
    setSwitchCart(!switchCart)
  }
  return (
    <section className='w-[90%] container absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-end'>
      <button
        onClick={handleSwitchCart}
        className='w-20 py-1 px-4 text-lg bg-black text-center text-white font-medium rounded-full'
      >
        Cart
      </button>
      {
        switchCart && (
          <section className='w-full bg-black h-auto relative top-3 rounded-xl left-0 p-5'>
            <CartArticle cart={cart} />
          </section>
        )
      }
    </section>
  )
}
