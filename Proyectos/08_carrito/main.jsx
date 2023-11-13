import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './src/context/FiltersContext'
import { App } from './src/App'
import './style.css'

createRoot(document.getElementById('app')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
