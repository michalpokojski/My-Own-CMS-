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


const Users = (props) => {

  const cmsUsers = [...users]
  const usersSorted = sortByString(cmsUsers, props.filterName)
  const changeSorting = filter => () => props.changeFilterName(filter)

  return (
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>
            <IconButton disabled={props.filterName === 'firstName'}
                        onClick={changeSorting('firstName')}
                        iconClassName="material-icons"
            >
              sort
            </IconButton>
            First Name
          </TableHeaderColumn>
          <TableHeaderColumn>
            <IconButton disabled={props.filterName === 'lastName'}
                        onClick={changeSorting('lastName')}
                        iconClassName="material-icons"
            >
              sort
            </IconButton>
            Last Name
          </TableHeaderColumn>
          <TableHeaderColumn>
            <IconButton disabled={props.filterName === 'email'}
                        onClick={changeSorting('email')}
                        iconClassName="material-icons"
            >
              sort
            </IconButton>
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