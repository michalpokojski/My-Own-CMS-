import { reduxForm } from "redux-form"
import EditUserForm from '../components/EditUserForm'
import submitEditedUser from '../containers/submitEditedUser'


export default reduxForm({
  form: "editUser",
  onSubmit: submitEditedUser
})(EditUserForm)