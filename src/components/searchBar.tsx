import { useContext, useState } from 'react'
import { FilterContextValue } from '../context/filterContext'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const { state,dispatch } = useContext(FilterContextValue)

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
    dispatch({ type: 'set_search', payload: event.target.value })
  }


  const handleClearSearch = () => {
    dispatch({ type: 'set_search', payload: '' })
  }
  return (
    <div className='flex justify-between w-full p-4 bg-gray-900'>
      <input
        type='text'
        placeholder='Find the items you are looking for'
        className='w-full  focus:outline-none'
        onChange={handleSearchInput}
        value={state.search}
        // onKeyDown={handleSearch}
      />

      {state.search.trim().length === 0 ? (
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='lucide lucide-search-icon lucide-search'
          >
            <path d='m21 21-4.34-4.34' />
            <circle cx='11' cy='11' r='8' />
          </svg>
        </button>
      ) : (
        <button
          className='cursor-pointer'
          title='close'
          onClick={handleClearSearch}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M20 20L4 4.00003M20 4L4.00002 20'
              stroke='#fff'
              stroke-width='2'
              stroke-linecap='round'
            />
          </svg>
        </button>
      )}
    </div>
  )
}
export default SearchBar
