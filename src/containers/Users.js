import { connect } from 'react-redux'
import Users from '../components/Users'
import { changeFilterName } from '../reducers/filters'


export default connect(
  state => ({
    filterName: state.filters.filterName,
    latelyFiltered: state.filters.latelyFiltered
  }),
  dispatch => ({
    changeFilterName: filter => dispatch(changeFilterName(filter))
  })
)(Users)