const CHANGE_FILTER_NAME = 'filterName/CHANGE_FILTER_NAME'

const changeFilterName = filter => ({
  type: CHANGE_FILTER_NAME,
  filter
})

const initialState = {
  filterName: 'email'
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FILTER_NAME:
      return {
        ...state,
        filterName: action.filter
      }
    default:
      return state
  }
}

export { changeFilterName }