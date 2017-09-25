import React from 'react'
import RemoveButton from '../containers/RemoveButton'
import EditButton from "../containers/EditButton";

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
        <div style={{width: '40px', display: 'inline-block'}}>{key}</div>
        <RemoveButton email={fullUserObject.email} />
        <EditButton user={fullUserObject}/>
      </div>
    )
  },
]