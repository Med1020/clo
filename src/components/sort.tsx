import { useContext } from 'react'
import { FilterContextValue } from '../context/filterContext'

const Sort = () => {
  const { dispatch } = useContext(FilterContextValue)

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
    dispatch({
      type: 'set_sort',
      payload: event.target.value.toLocaleLowerCase(),
    })
  }
  return (
    <div className='w-full flex justify-end my-6'>
      <label className='mx-4'>Sort by: </label>
      <select onChange={handleSort} className='bg-black cursor-pointer'>
        <option value='name' selected>
          Name
        </option>
        <option value='price-asc'>Price Low to High</option>
        <option value='price-desc'>Price High to Low</option>
      </select>
    </div>
  )
}
export default Sort
