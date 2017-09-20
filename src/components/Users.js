import React from 'react'
import users from '../data/users.json'
import IconButton from 'material-ui/IconButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import { sortByString } from '../helpers/sorting'


const Users = () => {
  const cmsUsers = [...users]
  const usersSorted = sortByString(cmsUsers, 'email')

  return (
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>
            <IconButton iconClassName="muidocs-icon-custom-github"/>
            First Name
          </TableHeaderColumn>
          <TableHeaderColumn>
            Last Name
          </TableHeaderColumn>
          <TableHeaderColumn>
            Mail
          </TableHeaderColumn>
          <TableHeaderColumn>
            Acc Type
          </TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {usersSorted.map(user =>
          <TableRow key={user.email}>
            <TableRowColumn>{user.firstName}</TableRowColumn>
            <TableRowColumn>{user.lastName}</TableRowColumn>
            <TableRowColumn>{user.email}</TableRowColumn>
            <TableRowColumn>{user.type}</TableRowColumn>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default Users