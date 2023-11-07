import { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

export function useFilters () {
  const { filters, setFilters } = useContext(FilterContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return { filterProducts, setFilters, filters }
}
