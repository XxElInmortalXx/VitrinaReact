import Filters from './Filters'

function Header ({ setFilters }) {
  return (
    <header>
      <h1 className='text-center font-bold py-4 uppercase text-4xl'>Shop Store</h1>
      <Filters setFilters={setFilters} />
    </header>
  )
}

export default Header
