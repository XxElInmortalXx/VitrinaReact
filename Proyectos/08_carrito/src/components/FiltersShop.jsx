import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import { useProducts } from '../hooks/useProducts'

export function FiltersShop () {
  const { products } = useProducts()
  const { filters, setFilters } = useFilters()

  const uniqueCategories = [...new Set(products.map(product => product.category))]

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (e) => {
    const value = e.target.value
    setFilters(prevState => ({
      ...prevState,
      minPrice: value
    }))
  }

  const handleChangeCategory = (e) => {
    const value = e.target.value
    setFilters(prevState => ({
      ...prevState,
      category: value
    }))
  }
  return (
    <section className='py-5'>
      <h2 className='text-center font-bold text-lg'>Filters</h2>
      <form className='flex flex-col sm:flex-row gap-2 my-5 justify-between items-center w-[70%] mx-auto container'>
        <fieldset className='flex gap-2 leading-none'>
          <label className='font-medium' htmlFor={minPriceFilterId}>Min Price: </label>
          <input
            type='range'
            id={minPriceFilterId}
            min='0'
            max='1000'
            value={filters.minPrice}
            onChange={handleChangeMinPrice}
          />
          <span>{filters.minPrice}</span>
        </fieldset>
        <fieldset>
          <label htmlFor={categoryFilterId}>Category: </label>
          <select
            onChange={handleChangeCategory}
            id={categoryFilterId}
          >
            <option value='all'>all</option>
            {
              uniqueCategories.map(category => {
                return (
                  <option key={category} value={category}>{category}</option>
                )
              })
            }
          </select>
        </fieldset>
      </form>
    </section>
  )
}
