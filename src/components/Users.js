import React, { Component } from 'react'
import DataTables from 'material-ui-datatables'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import Snackbar from 'material-ui/Snackbar'
import users from '../data/users.json'
import { sortByStringAscending, sortByStringDescending } from '../helpers/sorting'
import { TABLE_COLUMNS_USERS } from '../constants/tableColumnsSpecifications'
import NewUserForm from '../containers/NewUserForm'
import EditUserForm from "../containers/EditUserForm";
import { actionsCreator } from '../helpers/actionsCreator'
import DataTransformer from '../services/DataTransformer'
import { searchKeysForUsers } from '../constants/searchKeysDatabase'

class Users extends Component {
  state = {
    searchPhrase: "",
    page: 1,
    rowSize: 10,
    openUserCreator: false,
    snackBarStatus: false
  }

  handleFilter = value => this.setState({searchPhrase: value})

  handlePreviousPageClick = () => this.setState({page: this.state.page - 1})

  handleNextPageClick = () => this.setState({page: this.state.page + 1})

  handleRowSizeChange = (_, rowSize) => this.setState({page: 1, rowSize})

  handleOpen = () => this.setState({openUserCreator: true})

  handleClose = () => this.setState({openUserCreator: false})

  handleCloseWithSubmit = (isNew) => () => {
    isNew ? this.props.handleSubmitNewUser() : this.props.handleSubmitEditUser()
    setTimeout(() => isNew ?
      this.setState({openUserCreator: !this.props.submitStatusNewUser.submitSucceeded}) :
      this.props.saveEditing(this.props.submitStatusEditUser.submitSucceeded), 100)
  }

  handleRemoveClick = (email) => () => {
    this.setState({snackBarStatus: true})
    setTimeout(() => this.setState({snackBarStatus: false}), 2000)
    this.props.removeUser(email)
    this.props.closeConfirm()
  }

  handleCloseConfirmModal = () => this.props.closeConfirm()

  render() {
    const actionsUserAdd = actionsCreator('Cancel', this.handleClose, 'Submit', this.handleCloseWithSubmit(true))
    const actionsUserEdit = actionsCreator('Cancel', this.props.discardEdditing, 'Save', this.handleCloseWithSubmit(false))
    const actionsUserDelete = actionsCreator('I changed my mind!', this.handleCloseConfirmModal, 'Confirm', this.handleRemoveClick(this.props.userToDelete))

    const editedEmails = this.props.editedUsers.map(user => user.email)

    const allUsers = [...users.concat(this.props.newUsers)]
    const transformer = new DataTransformer(allUsers)
      .search(searchKeysForUsers, this.state.searchPhrase)
      .editUser(editedEmails, this.props.editedUsers)
      .paginate(this.state.rowSize, this.state.page)
      .filerOutRemovedUsers(this.props.removedUsers)


    const dataDefaultSorted = sortByStringAscending(transformer.collection, 'email')

    const handleSort = (key, order) => order === 'desc' ? sortByStringDescending(dataDefaultSorted, key) : sortByStringAscending(dataDefaultSorted, key)

    return (
      <div>
        <DataTables
          height={'auto'}
          showRowHover
          columns={TABLE_COLUMNS_USERS}
          data={dataDefaultSorted}
          showCheckboxes={false}
          onSortOrderChange={handleSort}
          showHeaderToolbar
          showHeaderToolbarFilterIcon={false}
          initialSort={{column: 'email', order: 'asc'}}
          onFilterValueChange={this.handleFilter}
          headerToolbarMode={'filter'}
          count={allUsers.length}
          page={this.state.page}
          rowSize={this.state.rowSize}
          onPreviousPageClick={this.handlePreviousPageClick}
          onNextPageClick={this.handleNextPageClick}
          onRowSizeChange={this.handleRowSizeChange}
        />
        <RaisedButton primary label="Add new \n user" onClick={this.handleOpen}/>
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
        </Dialog>
        <Dialog
          title={'Delete user'}
          actions={actionsUserDelete}
          modal={true}
          open={this.props.confirmModalOpenStatus}
        >
          {`Are you sure you want to delete user ${this.props.userToDelete}`}
        </Dialog>
        <Snackbar
          open={this.state.snackBarStatus}
          message={`User removed`}
          autoHideDuration={2000}
        />
      </div>
    );
  }
}

export default Users