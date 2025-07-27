//  State type
export type FilterState = {
  paid: boolean
  free: boolean
  viewOnly: boolean
  search: string
  sortBy: 'price-asc' | 'price-desc' | 'name'
}

//  Action types
export type FilterAction =
  | { type: 'filter_by'; payload: { [key: string]: boolean } }
  | { type: 'reset_filter' }
  | { type: 'set_search'; payload: string }
  | { type: 'set_sort'; payload: FilterState['sortBy'] }

//  Initial state
export const initialFilterState: FilterState = {
  paid: false,
  free: false,
  viewOnly: false,
  search: '',
  sortBy: 'name',
}

// Reducer function
export const FilterReducer = (
  state: FilterState = initialFilterState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case 'filter_by': {
      const [filter, value] = Object.entries(action.payload)[0]
      return { ...state, [filter]: value }
    }
    case 'reset_filter':
      return initialFilterState

    case 'set_search':
      return { ...state, search: action.payload }
    case 'set_sort':
      return { ...state, sortBy: action.payload }
    default:
      return state
  }
}
