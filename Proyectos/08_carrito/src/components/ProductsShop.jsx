import { useCart } from '../hooks/useCart'

export function ProductsShop ({ products }) {
  const { addCart } = useCart()
  const handleAddToCart = ({ product }) => {
    addCart({ product })
  }

  return (
    <main className='w-[90%] sm:w-[90%] mx-auto container'>
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 shadow-2xl p-5 rounded-xl'>
        {
          products.map(product => (
            <li
              className='p-4 rounded-xl border-2 bg-gray-100 shadow-xl'
              key={product.id}
            >
              <img className='w-full h-40 object-cover rounded-xl border shadow-xl' src={product.thumbnail} alt={product.description} />
              <h3 className='font-bold leading-8 whitespace-nowrap overflow-hidden texove text-ellipsis'>{product.title}</h3>
              <p className='font-bold'>${product.price}</p>
              <button
                onClick={() => handleAddToCart({ product })}
                className='bg-gray-950 text-white w-full rounded-xl shadow-xl border p-1 mt-2'
              >
                Add to cart
              </button>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
