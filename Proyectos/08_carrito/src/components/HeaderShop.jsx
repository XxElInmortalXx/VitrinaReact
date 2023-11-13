import { FiltersShop } from './FiltersShop'
import { CartShop } from './CartShop'

export function HeaderShop () {
  return (
    <header>
      <h1 className='text-center my-5 font-bold text-4xl'>CartShop</h1>
      <FiltersShop />
      <CartShop />
    </header>
  )
}
