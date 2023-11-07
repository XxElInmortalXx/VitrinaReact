import Filters from './Filters'
import Cart from './Cart'

function Header () {
  return (
    <header className='w-[90%] container mx-auto'>
      <div className='flex justify-between items-center'>
        <Cart />
        <h1 className='text-center font-bold py-4 uppercase text-4xl'>Shop Store</h1>
        <p className='hidden md:block py-2 px-6 bg-gray-900 text-gray-50 border-2 font-medium rounded-xl'>GitHub</p>
      </div>
      <Filters />
    </header>
  )
}

export default Header
