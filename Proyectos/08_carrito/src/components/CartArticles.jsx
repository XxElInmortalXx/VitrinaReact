import { useCart } from '../hooks/useCart'

export function CartArticle ({ cart }) {
  const { deleteToCart, totalToCart } = useCart()

  const hasCart = cart.length > 0
  const handleDeleteToCart = (id) => {
    deleteToCart({ id })
  }

  return (
    <ul className='w-full bg-black space-y-5 text-white h-auto rounded-xl p-5'>
      {
        hasCart
          ? (
              cart.map(article => (
                <li
                  className='flex justify-between items-center gap-2'
                  key={article.id}
                >
                  <div className='flex flex-col sm:flex-row gap-2 items-center'>
                    <img className='w-28 h-16 object-cover border-2   border-white rounded-lg' src={article.thumbnail} alt={article.description} />
                    <div>
                      <h3>{article.title}</h3>
                      <p>${article.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteToCart(article.id)}
                    className='bg-red-500 text-white font-medium py-1 px-6 rounded-full'
                  >
                    Delete
                  </button>
                </li>
              ))
            )
          : <p className='text-white'>The cart is empty</p>
      }
      {hasCart && <p className='font-bold mt-5 text-xl'>Total: {totalToCart}</p>}
    </ul>
  )
}
