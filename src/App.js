import './styles.css'

import { Table } from './Table'

export default function App() {
  const columns = [
    { accessor: 'name', label: 'Name' },
    { accessor: 'age', label: 'Age' },
    { accessor: 'is_manager', label: 'Manager (true or false)', format: (value) => (value ? '✔️' : '✖️') },
    { accessor: 'start_date', label: 'Start Date' },
  ]

  const rows = [
    { id: 1, name: 'Aditya', age: 36, is_manager: true, start_date: '02-12-1999' },
    { id: 2, name: 'Asok', age: 33, is_manager: true, start_date: '03-05-1997' },
    { id: 3, name: 'Devya Sharma', age: 39, is_manager: false, start_date: '07-12-2002' },
    { id: 4, name: 'Sanjay Arora', age: 40, is_manager: false, start_date: '02-07-1999' },
    { id: 5, name: 'Ranju', age: 35, is_manager: false, start_date: '01-01-1970' },
    { id: 6, name: 'Sujith', age: 42, is_manager: true, start_date: '04-06-2000' },
    { id: 7, name: 'Bhintra Devi', age: 36, is_manager: false, start_date: '05-09-2003' },
    { id: 8, name: 'Deepak Kumar', age: 37, is_manager: true, start_date: '06-04-2006' },
    { id: 9, name: 'Sarath', age: 34, is_manager: true, start_date: '06-11-2004' },
    { id: 10, name: 'Maran', age: 41, is_manager: false, start_date: '06-08-2002' },
    { id: 11, name: null, age: null, is_manager: null, start_date: null },
  ]

  return (
    <div className="App" style={{backgroundColor:"beige"}}>
      <h1>Table</h1>
      <h2>Sorting, Filtering, Pagination</h2>

      <Table rows={rows} columns={columns} />
    </div>
  )
}