import { useContext } from 'react'
import { FilterContextValue } from '../context/filterContext'

const Filter = () => {
  const { state, dispatch } = useContext(FilterContextValue)

  const handleReset = () => {
    dispatch({ type: 'reset_filter' })
  }

  const handleSetFilter = (val: string) => {
    dispatch({ type: 'filter_by', payload: { [val]: !state[val] } })
  }
  return (
    <div className='flex p-4 gap-4 justify-between'>
      <div className='flex gap-4'>
        <p>Pricing Option</p>
        <label>
          <input
            type='checkbox'
            onChange={() => handleSetFilter('paid')}
            checked={state['paid']}
            className='mx-2 cursor-pointer'
          />
          Paid
        </label>
        <label>
          <input
            type='checkbox'
            onChange={() => handleSetFilter('free')}
            checked={state['free']}
            className='mx-2 cursor-pointer'
          />
          Free
        </label>
        <label>
          <input
            type='checkbox'
            onChange={() => handleSetFilter('viewOnly')}
            checked={state['viewOnly']}
            className='mx-2 cursor-pointer'
          />
          View Only
        </label>
      </div>

      <button onClick={handleReset} className='font-semibold cursor-pointer'>
        RESET
      </button>
    </div>
  )
}
export default Filter
