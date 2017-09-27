import { reduxForm } from "redux-form"
import EditUserForm from '../components/EditUserForm'
import submitEditedUser from '../containers/submitEditedUser'
import { connect } from 'react-redux'


const formOptions = {
  form: "editUser",
  onSubmit: submitEditedUser
}


export default connect(
  state => ({
    initialValues: state.userOperations.userBeingEdited
  })
)(reduxForm(formOptions)(EditUserForm))