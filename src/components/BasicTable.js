import React from 'react'
import DataTable from 'react-data-table-component'

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true
  }
]

const handleChange = (state) => {
  console.log('Selected Rows: ', state)
}

const mySweetTheme = {
  rows: {
    height: '64px'
  }
}

class BasicTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toggledClearRows: false,
      searchValue: '',
      tableData: [
        { id: 1, title: 'Conan the Barbarian', year: '1982', defaultChecked: true },
        { id: 2, title: 'Conan the Barbarian', year: '1982' },
        { id: 3, title: 'Conan the Barbarian', year: '1982' },
        { id: 4, title: 'Conan the Barbarian', year: '1982' },
        { id: 5, title: 'Conan the Barbarian', year: '1982' },
        { id: 6, title: 'Conan the Barbarian', year: '1982' }
      ]
    }
  }

  render () {
    console.log(this.state.selectedRows, this.state.tableData)
    this.state.selectedRows = this.state.tableData

    const handleSearchButton = (event) => {
      if (this.state.searchValue !== '') {
        this.setState({
          tableData: [{ id: 1, title: 'search string', year: 'new search' }]
        }, () => {
          console.log('handle search', this.state.tableData)
        })
      } else {
        this.setState({
          tableData: [
            { id: 1, title: 'Conan the Barbarian 1', year: '198 2' },
            { id: 2, title: 'Conan the Barbarian 2', year: '198 3' },
            { id: 3, title: 'Conan the Barbarian 3', year: '198 4' },
            { id: 4, title: 'Conan the Barbarian 4', year: '198 5' },
            { id: 5, title: 'Conan the Barbarian 5', year: '198 6' },
            { id: 6, title: 'Conan the Barbarian 6', year: '198 7' }
          ]
        }, () => {
          console.log('handle search', this.state.tableData)
        })
      }
      event.preventDefault()
    }

    const handleSearchInput = (event) => {
      this.setState({ searchValue: event.target.value }, () => {
        console.log('handle search', this.state.searchValue)
      })
      event.preventDefault()
    }

    return (
      <div>
        <input type='text' value={this.state.searchValue} onChange={handleSearchInput} />
        <button onClick={handleSearchButton}>search</button>
        <DataTable
          title='Arnold Movies'
          columns={columns}
          data={this.state.tableData}
          selectableRows
          onRowSelected={handleChange}
          pagination
          paginationTotalRows={10}
          customTheme={mySweetTheme}
          overflowY
          noHeader
        />
      </div>
    )
  }
}

export default BasicTable
