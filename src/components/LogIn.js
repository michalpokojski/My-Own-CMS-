import React from "react"
import { Field } from "redux-form"
import submit from '../containers/submit'
import TextField from 'material-ui/TextField'
import { MuiThemeProvider } from 'material-ui/styles'
import { required } from "../helpers/validation"

export const renderTextField = ({input, label, meta: {touched, error}, ...custom},) => (
  <MuiThemeProvider>
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  </MuiThemeProvider>
)


const LogIn = props => {
  const {handleSubmit, submitting, error} = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <div>
          <Field
            name="email"
            component={renderTextField}
            type="email"
            label="Email"
            validate={required}
          />
        </div>
      </div>
      <div>
        <div>
          <Field
            name="password"
            component={renderTextField}
            label="Password"
            type="password"
            validate={required}
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <br/>
        {error && <strong>{error}</strong>}
      </div>
    </form>
  )
}

export default LogIn