import { reduxForm } from "redux-form"
import NewUserForm from '../components/NewUserForm'
import submitNewUser from '../containers/submitNewUser'


export default reduxForm({
  form: "newUser",
  destroyOnUnmount: false,
  onSubmit: submitNewUser
})(NewUserForm)