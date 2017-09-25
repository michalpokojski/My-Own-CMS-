import React from 'react'
import RemoveButton from '../containers/RemoveButton'

export const TABLE_COLUMNS_USERS = [
  {
    key: 'firstName',
    label: 'First Name',
    sortable: true
  }, {
    key: 'lastName',
    label: 'Last Name',
    sortable: true
  }, {
    key: 'email',
    label: 'Email',
    sortable: true
  }, {
    key: 'type',
    label: 'Type',
    sortable: true,
    render: (key, fullUserObject) => (
      <div>
        <span>{key}</span>
        <RemoveButton email={fullUserObject.email} />
      </div>
    )
  },
]