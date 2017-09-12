import users from '../data/users.json'

const initialState = {
  ...users
}

export default (state = initialState) => {
  return state
}