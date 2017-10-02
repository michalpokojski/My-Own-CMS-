import React from 'react'
import { required, number } from "../helpers/validation"
import { Field } from "redux-form"
import CustomTextField from './CustomTextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const CustomSelectField = ({input, label, meta: {touched, error}, children, ...custom}) => {
  const inputValueInjection = (event, index, val) => input.onChange(val)
  return (
    <SelectField
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      onChange={inputValueInjection}
      children={children}
      {...custom}
    />
  )
}

const EditUserForm = () => {
  return (
    <form className="log-in-form">
      <div>
        <div>
          <Field
            name="password"
            component={CustomTextField}
            type="password"
            label="New Password"
            validate={[required]}
          />
        </div>
        <div>
          <Field
            name="phoneNumber"
            component={CustomTextField}
            label="Phone Number"
            validate={[required, number]}
          />
        </div>
        <div>
          <Field
            name="firstName"
            component={CustomTextField}
            label="First Name"
            validate={required}
          />
        </div>
        <div>
          <Field
            name="lastName"
            component={CustomTextField}
            label="Last Name"
            validate={required}
          />
        </div>
        <div>
          <Field
            name="type"
            component={CustomSelectField}
            label="Account Type"
          >
            <MenuItem value={'admin'} primaryText="Admin"/>
            <MenuItem value={'user'} primaryText="Plebs"/>
          </Field>
        </div>
      </div>
    </form>
  )
}
export default EditUserForm