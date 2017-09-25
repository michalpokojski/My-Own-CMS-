import React, { Component } from 'react'
import DataTables from 'material-ui-datatables'
import users from '../data/users.json'
import { sortByStringAscending, sortByStringDescending } from '../helpers/sorting'
import { TABLE_COLUMNS_USERS } from '../constants/tableColumnsSpecifications'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import NewUserForm from '../containers/NewUserForm'

class Users extends Component {
  state = {
    searchPhrase: "",
    page: 1,
    rowSize: 10,
    openUserCreator: false,
    openUserEdit: false
  }

  handleFilter = value => {
    this.setState({
      searchPhrase: value
    })
  }

  handlePreviousPageClick = () => {
    this.setState({page: this.state.page - 1})
  }

  handleNextPageClick = () => {
    this.setState({page: this.state.page + 1})
  }

  handleRowSizeChange = (rowSizeIndex, rowSize) => {
    this.setState({page: 1, rowSize})
  }

  handleOpen = () => {
    this.setState({openUserCreator: true})
  }

  handleClose = () => {
    this.setState({openUserCreator: false})
  }

  handleCloseWithSubmit = () => {
    this.props.handleSubmit()
    setTimeout(() => this.setState({openUserCreator: !this.props.submitStatus.submitSucceeded}), 1000)
  }
  render() {
    let data = sortByStringAscending([...users.concat(this.props.newUsers)], 'email')
      .filter(row =>
        row.email.includes(this.state.searchPhrase) ||
        row.lastName.includes(this.state.searchPhrase) ||
        row.firstName.includes(this.state.searchPhrase))

    let displayData = data.slice(this.state.rowSize * (this.state.page - 1), this.state.rowSize * (this.state.page))
      .filter(row => !this.props.removedUsers.some(name => name === row.email))

    const handleSort = (key, order) => order === 'desc' ? sortByStringDescending(displayData, key) : sortByStringAscending(displayData, key)

    const actionsUserAdd = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleCloseWithSubmit}
      />,
    ]

    const actionsUserEdit = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.saveEditing}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.props.saveEditing}
      />,
    ]

    return (
      <div>
        <DataTables
          height={'auto'}
          showRowHover
          columns={TABLE_COLUMNS_USERS}
          data={displayData}
          showCheckboxes={false}
          onSortOrderChange={handleSort}
          showHeaderToolbar
          showHeaderToolbarFilterIcon={false}
          initialSort={{column: 'email', order: 'asc'}}
          onFilterValueChange={this.handleFilter}
          headerToolbarMode={'filter'}
          count={data.length}
          page={this.state.page}
          rowSize={this.state.rowSize}
          onPreviousPageClick={this.handlePreviousPageClick}
          onNextPageClick={this.handleNextPageClick}
          onRowSizeChange={this.handleRowSizeChange}
        />
        <RaisedButton primary label="Add new user" onClick={this.handleOpen}/>
        <Dialog
          title="Add new user"
          actions={actionsUserAdd}
          modal={true}
          open={this.state.openUserCreator}
        >
          <NewUserForm />
          {this.props.submitStatus.submitSucceeded && <h1>Success</h1>}
        </Dialog>
        <Dialog
          title="Add new user"
          actions={actionsUserEdit}
          modal={true}
          open={this.props.openUserEdit}
        >New form goes here and edits user with email: {this.props.userBeingEdited && this.props.userBeingEdited.email}
        </Dialog>
      </div>
    )
  }
}

export default Users