import React from 'react'
import users from '../data/users.json'
import FontIcon from 'material-ui/FontIcon'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import Divider from 'material-ui/Divider'
import Card from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { sortByStringAscending, sortByStringDescending } from '../helpers/sorting'


const Users = (props) => {

  const cmsUsers = [...users]
  const usersSorted = props.latelyFiltered ? sortByStringDescending(cmsUsers, props.filterName) : sortByStringAscending(cmsUsers, props.filterName)
  const changeSorting = filter => () => props.changeFilterName(filter)

  return (
    <Card>
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>
              <FlatButton
                label="First Name"
                onClick={changeSorting('firstName')}
                icon={props.filterName === 'firstName' && <FontIcon className="material-icons">{`keyboard_arrow_${props.latelyFiltered ? 'up' : 'down'}`}</FontIcon>}
              />
            </TableHeaderColumn>
            <TableHeaderColumn>
              <FlatButton
                label="Last Name"
                onClick={changeSorting('lastName')}
                icon={props.filterName === 'lastName' && <FontIcon className="material-icons">{`keyboard_arrow_${props.latelyFiltered ? 'up' : 'down'}`}</FontIcon>}
              />
            </TableHeaderColumn>
            <TableHeaderColumn>
              <FlatButton
                label="E-mail"
                onClick={changeSorting('email')}
                icon={props.filterName === 'email' && <FontIcon className="material-icons">{`keyboard_arrow_${props.latelyFiltered ? 'up' : 'down'}`}</FontIcon>}
              />
            </TableHeaderColumn>
            <TableHeaderColumn>
              <FlatButton label="Account Type" fullWidth={true} disabled={true} style={{textAlign: 'left'}}/>
            </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}
                   showRowHover={true}
                   stripedRows={true}
        >
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
      <Divider/>
    </Card>
  )
}

export default Users