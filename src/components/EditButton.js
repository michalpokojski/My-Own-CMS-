import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const EditButton = (props) => (
  <FlatButton primary style={{marginLeft: 25}} onClick={() => props.currentlyBeingEdited(props.user)}>
    Edit
  </FlatButton>
)

export default EditButton