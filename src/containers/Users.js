import { connect } from 'react-redux'
import Users from '../components/Users'
import { submit } from 'redux-form'

export default connect(
  state => ({
    removedUsers: state.filters.filterOut,
    submitStatus: state.form.newUser || false,
    newUsers: state.addNewUser.newUsers
  }),
  dispatch => ({
    handleSubmit: () => dispatch(submit('newUser'))
  })
)(Users)