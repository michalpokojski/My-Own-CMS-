import { SubmissionError } from 'redux-form';
import users from '../data/users.json'
import { addNewUser } from '../reducers/addNewUser'

const delayThisBy = ms => new Promise(resolve => setTimeout(resolve, ms))
const usersEmails = users.map(user => user.email)

function submitNewUser(values, dispatch) {
  return delayThisBy(1).then(() => {
    if (usersEmails.includes(values.email)) {
      throw new SubmissionError({
        _error: 'This email is already taken !',
      })
    } else {
      dispatch(addNewUser({
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        type: values.accountType || 'user'
      }))
    }
  })
}

export default submitNewUser