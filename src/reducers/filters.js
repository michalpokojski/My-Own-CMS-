const CHANGE_FILTER_NAME = 'filterName/CHANGE_FILTER_NAME'

const changeFilterName = filter => ({
  type: CHANGE_FILTER_NAME,
  filter
})

const initialState = {
  filterName: 'email',
  latelyFiltered: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FILTER_NAME:
      return {
        ...state,
        filterName: action.filter,
        latelyFiltered: !state.latelyFiltered
      }
    default:
      return state
  }
}

export { changeFilterName }