import React from "react"
import {Field, reduxForm} from "redux-form"
import submit from '../containers/submit'
import TextField from 'material-ui/TextField'
import { MuiThemeProvider } from 'material-ui/styles'


const required = value => (value ? undefined : 'Required')

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

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


const SimpleForm = props => {
  const {handleSubmit, submitting, error} = props

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        {/*<label>Email</label>*/}
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
        <label>Password</label>
        <div>
          <Field
            name="password"
            component={renderTextField}
            label="Password"
            type="password"
            validate={required}
          />
          {error && <strong>{error}</strong>}
        </div>
      </div>
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "auth"
})(SimpleForm);







