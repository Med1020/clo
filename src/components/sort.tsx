import { useContext } from 'react'
import { FilterContextValue } from '../context/filterContext'

const Sort = () => {
  const filterContext = useContext(FilterContextValue)

  if (!filterContext) {
    throw new Error('FilterContext must be used within a FilterProvider')
  }

  const { dispatch } = filterContext

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: 'set_sort',
      payload: event.target.value.toLocaleLowerCase() as
        | 'price-asc'
        | 'price-desc'
        | 'name',
    })
  }
  return (
    <div className='w-full flex justify-end my-6'>
      <label className='mx-4'>Sort by: </label>
      <select onChange={handleSort} className='bg-black cursor-pointer'>
        <option value='name'>Name</option>
        <option value='price-asc'>Price Low to High</option>
        <option value='price-desc'>Price High to Low</option>
      </select>
    </div>
  )
}
export default Sort
