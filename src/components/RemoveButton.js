import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const RemoveButton = (props) => {
  const handleRemoveClick = () => props.removeUser(props.email)
  return (
    <FlatButton secondary style={{marginLeft: 25}} onClick={handleRemoveClick}>
      Remove
    </FlatButton>
  )
}
export default RemoveButton