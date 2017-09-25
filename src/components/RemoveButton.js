import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const RemoveButton = (props) => (
  <FlatButton secondary style={{marginLeft: 25}} onClick={() => props.remover(props.email)}>
    Remove
  </FlatButton>
)

export default RemoveButton