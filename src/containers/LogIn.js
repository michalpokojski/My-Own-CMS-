import { reduxForm } from "redux-form"
import LogIn from '../components/LogIn'

export default reduxForm({
  form: "auth"
})(LogIn)