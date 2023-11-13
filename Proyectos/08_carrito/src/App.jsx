import { HeaderShop } from './components/HeaderShop'
import { ProductsShop } from './components/ProductsShop'
import { CartProvider } from './context/CartContext'
import { useFilters } from './hooks/useFilters'

export function App () {
  const { filteredProducts } = useFilters()
  return (
    <CartProvider>
      <HeaderShop />
      <ProductsShop products={filteredProducts} />
    </CartProvider>
  )
}
