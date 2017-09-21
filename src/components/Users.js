import React, { Component } from 'react'
import DataTables from 'material-ui-datatables'
import users from '../data/users.json'
import { sortByStringAscending, sortByStringDescending } from '../helpers/sorting'
import { TABLE_COLUMNS_USERS } from '../constants/tableColumnsSpecifications'

class Users extends Component {
  state = {
    searchPhrase: "",
    page: 1,
    rowSize: 10,
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
    this.setState({page: 1, rowSize});
  }

  render() {

    let data = sortByStringAscending([...users], 'email')
      .filter(row =>
        row.email.includes(this.state.searchPhrase) ||
        row.lastName.includes(this.state.searchPhrase) ||
        row.firstName.includes(this.state.searchPhrase))

    let displayData = data.slice(this.state.rowSize * (this.state.page - 1), this.state.rowSize * (this.state.page))

    const handleSort = (key, order) => order === 'desc' ? sortByStringDescending(displayData, key) : sortByStringAscending(displayData, key)

    return (
      <DataTables
        height={'auto'}
        showRowHover={true}
        columns={TABLE_COLUMNS_USERS}
        data={displayData}
        showCheckboxes={false}
        onSortOrderChange={handleSort}
        showHeaderToolbar={true}
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
    )
  }
}

export default Users