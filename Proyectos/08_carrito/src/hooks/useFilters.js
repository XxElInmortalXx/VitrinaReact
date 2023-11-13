import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersContext'
import { useProducts } from './useProducts'

export function useFilters () {
  const { products } = useProducts()
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = () => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts({ products })

  return { filters, setFilters, filteredProducts }
}
