import { products as initialProducts } from './mocks/products.json'
import Products from './components/Products'
import Header from './components/Header'
import { useState } from 'react'

function useFilters ({ products }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filterProducts, setFilters }
}

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilters({ products })

  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header setFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
