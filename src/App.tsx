import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductsPage from './pages/products_page'
import { FilterProvider } from './context/filterProvider'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={'/'}
            element={
              <FilterProvider>
                <ProductsPage />{' '}
              </FilterProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
