import { connect } from 'react-redux'
import Users from '../components/Users'
import { changeFilterName } from '../reducers/filters'


export default connect(
  state => ({
    filterName: state.filters.filterName
  }),
  dispatch => ({
    changeFilterName: filter => dispatch(changeFilterName(filter))
  })
)(Users)