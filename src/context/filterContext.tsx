import { createContext } from 'react'
import type { FilterAction, FilterState } from './filterReducer'

//  Define context type
type FilterContextType = {
  state: FilterState
  dispatch: React.Dispatch<FilterAction>
}

//  Create context
export const FilterContextValue = createContext<FilterContextType | null>(null)

