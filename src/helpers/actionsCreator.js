import React from 'react'
import FlatButton from 'material-ui/FlatButton'

export const actionsCreator = (negativeLabel, negativeAction, positiveLabel, positiveAction) => (
  [
    <FlatButton
      label={negativeLabel}
      secondary
      onClick={negativeAction}
    />,
    <FlatButton
      label={positiveLabel}
      primary
      onClick={positiveAction}
    />,
  ]
)