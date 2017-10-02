import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const RemoveButton = (props) => {

  const handleOpenConfirmModal = (user) => () => props.openConfirm(user)
  return (
    <div style={{display: 'inline-block'}}>
      <FlatButton secondary style={{marginLeft: 25}} onClick={handleOpenConfirmModal(props.email)}>
        Remove
      </FlatButton>
    </div>
  )
}
export default RemoveButton