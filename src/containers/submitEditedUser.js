import { submitEditedUser } from '../reducers/usersOperations'

const delayThisBy = ms => new Promise(resolve => setTimeout(resolve, ms))

function submitNewUser(values, dispatch, props) {
  console.log(props)
  return delayThisBy(1).then(() => dispatch(submitEditedUser({
      email: props.userData.email,
      password: values.password || props.userData.password,
      phoneNumber: values.phoneNumber || props.userData.phoneNumber,
      firstName: values.firstName || props.userData.firstName,
      lastName: values.lastName || props.userData.lastName,
      type: values.type || props.userData.type
    }))
  )
}

export default submitNewUser