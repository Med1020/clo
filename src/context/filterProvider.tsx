import { useEffect, useReducer, type ReactNode } from 'react'
import { FilterReducer, type FilterState } from './filterReducer'
import { FilterContextValue } from './filterContext'
import { useSearchParams } from 'react-router-dom'

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const urlState: FilterState = {
    paid: searchParams.get('paid') === 'true',
    free: searchParams.get('free') === 'true',
    viewOnly: searchParams.get('viewOnly') === 'true',
    search: searchParams.get('search') || '',
    sortBy: (searchParams.get('sortBy') as FilterState['sortBy']) || 'name',
  }
  const [state, dispatch] = useReducer(FilterReducer, urlState)

  useEffect(() => {
    const updated = new URLSearchParams()
    if (state.paid) updated.set('paid', 'true')
    if (state.free) updated.set('free', 'true')
    if (state.viewOnly) updated.set('viewOnly', 'true')
    if (state.search) updated.set('search', state.search)
    if (state.sortBy) updated.set('sortBy', state.sortBy)
    setSearchParams(updated)
  }, [state, setSearchParams])

  return (
    <FilterContextValue.Provider value={{ state, dispatch }}>
      {children}
    </FilterContextValue.Provider>
  )
}
