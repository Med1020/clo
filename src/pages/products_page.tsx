import Filter from '../components/filter'
import Navbar from '../components/navbar'
import Products from '../components/products'
import SearchBar from '../components/searchBar'

import Sort from '../components/sort'

const ProductsPage = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <div className='mx-12 xl:mx-42'>
        <SearchBar />
        <Filter />
        <Sort />
        <Products />
      </div>
    </div>
  )
}

export default ProductsPage
