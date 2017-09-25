import React from 'react'
import { required, email } from "../helpers/validation"
import { Field } from "redux-form"
import CustomTextField from './CustomTextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

let defaultValue = 'user'

const CustomSelectField = ({input, value, label, meta: {touched, error}, children, ...custom},) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, val) => {
      defaultValue = val
      return input.onChange(val)
    }}
    children={children}
    value={defaultValue}
    {...custom}
  />
)

const NewUserForm = (props) => {
  const {error} = props
  return (
    <form className="log-in-form">
      <div>
        <div>
          <div>
            <Field
              name="email"
              component={CustomTextField}
              type="text"
              label="Email"
              validate={[required, email]}
            />
          </div>
        </div>
        <div>
          <div>
            <Field
              name="number"
              component={CustomTextField}
              label="Phone Number"
              type="number"
              validate={required}
            />
          </div>
        </div>
        <div>
          <div>
            <Field
              name="firstName"
              component={CustomTextField}
              type="text"
              label="First Name"
              validate={required}
            />
          </div>
        </div>
        <div>
          <div>
            <Field
              name="lastName"
              component={CustomTextField}
              type="text"
              label="Last Name"
              validate={required}
            />
          </div>
        </div>
        <div>
          <div>
            <Field
              name="accountType"
              component={CustomSelectField}
              label="Account Type"
            >
              <MenuItem value={'admin'} primaryText="Admin"/>
              <MenuItem value={'user'} primaryText="Plebs"/>
            </Field>
          </div>
        </div>
        {error && <strong>{error}</strong>}
      </div>
    </form>
  )
}
export default NewUserForm