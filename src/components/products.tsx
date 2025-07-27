import { useContext, useEffect, useMemo, useState } from 'react'
import { fetchData } from '../services/productsapi'
import ProductCard from './productCard'
import { FilterContextValue } from '../context/filterContext'
import { pricingOptionMap } from '../utils/pricingOptionMap'
import type { ProductApiResponse } from '../types/productType'
import { ProductCardSkeleton } from './skeletonLoader/productCardSkeleton'

const Products = () => {
  const [fetchedProducts, setFetchedProducts] = useState<
    ProductApiResponse[] | []
  >([])
  const [loading, setLoading] = useState(false)
  const filterContext = useContext(FilterContextValue)

  if (!filterContext) {
    throw new Error('FilterContext must be used within a FilterProvider')
  }

  const { state } = filterContext

  useEffect(() => {
    setLoading(true)
    const intervalId = setInterval(async () => {
      try {
        const result = await fetchData()
        if (result) {
          setFetchedProducts(result)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }, 3000)
    return () => clearInterval(intervalId)
  }, [])

  const filteredProducts = useMemo(() => {
    return fetchedProducts
      .filter((product) => {
        const filterMatch =
          (!state.paid && !state.free && !state.viewOnly) ||
          (state.paid &&
            pricingOptionMap[product.pricingOption].toLocaleLowerCase() ===
              'paid') ||
          (state.free &&
            pricingOptionMap[product.pricingOption].toLocaleLowerCase() ===
              'free') ||
          (state.viewOnly &&
            pricingOptionMap[product.pricingOption].toLocaleLowerCase() ===
              'view only')

        // search match
        const searchMatch =
          product.title.toLowerCase().includes(state.search.toLowerCase()) ||
          product.creator.toLowerCase().includes(state.search.toLowerCase())

        return filterMatch && searchMatch
      })
      .sort((a, b) => {
        switch (state.sortBy) {
          case 'price-asc':
            return a.price - b.price
          case 'price-desc':
            return b.price - a.price
          case 'name':
            return a.title.localeCompare(b.title)
          default:
            return a.title.localeCompare(b.title)
        }
      })
  }, [state, fetchedProducts])

  return loading ? (
    <ProductCardSkeleton />
  ) : (
    <div>
      {filteredProducts.length > 0 && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8'>
          <ProductCard products={filteredProducts} />
        </div>
      )}
    </div>
  )
}

export default Products
