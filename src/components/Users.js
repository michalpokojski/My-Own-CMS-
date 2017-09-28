import React, { Component } from 'react'
import DataTables from 'material-ui-datatables'
import users from '../data/users.json'
import { sortByStringAscending, sortByStringDescending } from '../helpers/sorting'
import { TABLE_COLUMNS_USERS } from '../constants/tableColumnsSpecifications'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import NewUserForm from '../containers/NewUserForm'
import EditUserForm from "../containers/EditUserForm";
import { actionsCreator } from '../helpers/actionsCreator'
import DataTransformer from '../services/DataTransformer'

class Users extends Component {
  state = {
    searchPhrase: "",
    page: 1,
    rowSize: 10,
    openUserCreator: false,
  }

  constructor () {
    super(...arguments)
  }

  handleFilter = value => this.setState({searchPhrase: value})

  handlePreviousPageClick = () => this.setState({page: this.state.page - 1})

  handleNextPageClick = () => this.setState({page: this.state.page + 1})

  handleRowSizeChange = (_, rowSize) => this.setState({page: 1, rowSize})

  handleOpen = () => this.setState({openUserCreator: true})

  handleClose = () => this.setState({openUserCreator: false})

  handleCloseWithSubmit = (newOrEdit) => () => {
    newOrEdit === 'new' ? this.props.handleSubmitNewUser() : this.props.handleSubmitEditUser()
    setTimeout(() => newOrEdit === 'new' ?
      this.setState({openUserCreator: !this.props.submitStatusNewUser.submitSucceeded}) :
      this.props.saveEditing(this.props.submitStatusEditUser.submitSucceeded), 100)
  }

  handleRemoveClick = (email) => () => {
    this.props.removeUser(email)
    this.props.closeConfirm()
  }

  handleCloseConfirmModal = () => this.props.closeConfirm()

  render() {
    const transformer = new DataTransformer([...users.concat(this.props.newUsers)])

    const searchKeys = [ 'email', 'lastName', 'firstName', 'phoneNumber' ]

    const filters = transformer.search(searchKeys, 'misio').test()

    const data = sortByStringAscending([...users.concat(this.props.newUsers)], 'email')
      .filter(row =>
        row.email.includes(this.state.searchPhrase) ||
        row.lastName.includes(this.state.searchPhrase) ||
        row.firstName.includes(this.state.searchPhrase)
      )

    const editedEmails = this.props.editedUsers.map(user => user.email)

    const displayData = data.filter(row => !editedEmails.some(name => name === row.email))
      .concat(this.props.editedUsers)
      .slice(this.state.rowSize * (this.state.page - 1), this.state.rowSize * (this.state.page))
      .filter(row => !this.props.removedUsers.some(name => name === row.email))

    const handleSort = (key, order) => order === 'desc' ? sortByStringDescending(displayData, key) : sortByStringAscending(displayData, key)

    const actionsUserAdd = actionsCreator('Cancel', this.handleClose, 'Submit', this.handleCloseWithSubmit('new'))
    const actionsUserEdit = actionsCreator('Cancel', this.props.discardEdditing, 'Save', this.handleCloseWithSubmit('edit'))
    const actionsUserDelete = actionsCreator('I changed my mind!', this.handleCloseConfirmModal, 'Confirm', this.handleRemoveClick(this.props.userToDelete))

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
          <NewUserForm/>
          {this.props.submitStatusNewUser.submitSucceeded && <h1>Success</h1>}
        </Dialog>
        <Dialog
          title={`Editing user ${this.props.userBeingEdited && this.props.userBeingEdited.email}`}
          actions={actionsUserEdit}
          modal={true}
          open={this.props.openUserEdit}
        >
          <EditUserForm userData={this.props.userBeingEdited}/>
          {this.props.submitStatusEditUser.submitSucceeded && <h1>Success</h1>}
        </Dialog>
        <Dialog
          title={'Delete user'}
          actions={actionsUserDelete}
          modal={true}
          open={this.props.confirmModalOpenStatus}
        >
          {`Are you sure you want to delete user ${this.props.userToDelete}`}
        </Dialog>
      </div>
    );
  }
}

export default Users