import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';

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
    render: (name, all) => (
      <div>
        <h2>{name}</h2>
        <span>
          <FloatingActionButton>
             <ContentRemove/>
          </FloatingActionButton>
        </span>
      </div>
    )
  },
]