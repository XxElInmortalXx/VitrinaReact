import { products as initialProducts } from './mocks/products.json'
import Products from './components/Products'
import Header from './components/Header'
import { useState } from 'react'
import { useFilters } from './hooks/useFilters'

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters({ products })

  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
