import { useState } from 'react'

function Cart () {
  const [cart, setCart] = useState(false)
  const handleClick = () => {
    setCart(!cart)
  }
  return (
    <>
      <button
        onClick={handleClick}
        className='py-2 px-6 bg-gray-900 text-gray-50 border-2 font-medium rounded-xl'
      >
        Cart
      </button>
      {cart && (
        <section className='bg-gray-50 border-2 p-5 rounded-2xl w-80 h-auto absolute top-20'>
          <p className='text-center font-medium'>No hay elementos en el carrito</p>
          <article className='p-4 border-2 bg-gray-100 rounded-xl flex flex-col justify-between shadow-xl'>
            <img className='rounded-xl border-2 object-cover w-full h-40 mb-2 shadow-md' src='https://i.dummyjson.com/data/products/2/thumbnail.jpg' alt='aqui un alt' />
            <p className='font-medium'>Iphone</p>
            <p className='font-bold'>$325</p>
            <div className='flex gap-2 items-center'>
              <p className='font-light'>Qty: 2</p>
              <button className='font-medium text-xl leading-none cursor-pointer'>+</button>
              <button className='font-medium text-xl leading-none cursor-pointer'>-</button>
            </div>
            <button className='py-2 px-4 bg-gray-50 border-2 rounded-xl font-medium mt-4 shadow-lg w-full'>Delete to cart</button>
          </article>
          <button className='py-2 px-4 bg-black text-white border-2 rounded-xl font-medium mt-4 shadow-lg w-full'>Clear to cart</button>
        </section>
      )}
    </>
  )
}

export default Cart
