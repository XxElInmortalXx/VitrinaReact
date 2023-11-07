import { createRoot } from 'react-dom/client'
import { FilterProvider } from './src/context/FilterContext'
import App from './src/App'
import './style.css'

createRoot(document.getElementById('app')).render(
  <FilterProvider>
    <App />
  </FilterProvider>
)
