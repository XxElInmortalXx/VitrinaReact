import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export function useCart () {
  const { cart, setCart } = useContext(CartContext)

  const addCart = ({ product }) => {
    const isProductInCart = cart.some(item => item.id === product.id)
    if (isProductInCart) return
    const newCart = [...cart, product]
    setCart(newCart)
  }

  const deleteToCart = ({ id }) => {
    const newCart = cart.filter(item => item.id !== id)
    setCart(newCart)
  }

  // -------------------------------------------
  const calculateTotal = ({ cart }) => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price
    }, 0)
    return total.toFixed(2)
  }
  // -------------------------------------------

  const totalToCart = calculateTotal({ cart })

  return { cart, addCart, deleteToCart, totalToCart }
}
