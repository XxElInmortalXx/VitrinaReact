import { useFilters } from '../hooks/useFilters'

function Filters () {
  const { filters, setFilters } = useFilters()

  const handleOnChangeMinPrice = (e) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      minPrice: e.target.value
    }))
  }
  return (
    <section className='container mx-auto mb-4'>
      <form>
        <fieldset>
          <legend className='text-center font-medium text-2xl mb-2'>Filters</legend>

          <div className='flex flex-col sm:flex-row items-center justify-evenly gap-2'>
            <div className='flex items-center justify-center gap-2'>
              <label className='font-medium' htmlFor='price'>Price</label>
              <input
                name='price'
                type='range'
                min='0'
                max='1000'
                value={filters.minPrice}
                onChange={handleOnChangeMinPrice}
              />
              <span>{filters.minPrice}</span>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <label className='font-medium' htmlFor='categorias'>Category</label>
              <select
                id='category'
                onChange={handleChangeCategory}
                className='border-2 rounded-md p-1 outline-none border-black' name='categorias'
              >
                <option value='all'>all</option>
                <option value='laptops'>laptops</option>
              </select>
            </div>
          </div>

        </fieldset>
      </form>
    </section>
  )
}

export default Filters
