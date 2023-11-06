function Products ({ products }) {
  return (
    <main>
      <ul className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] w-[90%] mx-auto container'>
        {
          products.map(product => (
            <li className='p-4 border-2 bg-gray-100 rounded-xl flex flex-col justify-between shadow-xl' key={product.id}>
              <div>
                <img className='rounded-xl border-2 object-cover w-full h-40 mb-2 shadow-md' src={product.thumbnail} alt={product.description} />
                <h3 className='font-medium'>{product.title}</h3>
                <p className='font-bold'>${product.price}</p>
              </div>
              <button className='py-2 px-4 bg-gray-50 border-2 rounded-xl font-medium mt-4 shadow-lg'>Add to car</button>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export default Products
