import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    flex: 1,
    cellClassName: 'left-align',
  },
  { field: 'phoneNumber', headerName: 'Phone Number', flex: 1 },
  {
    field: 'email', // New column for email addresses
    headerName: 'Email',
    flex: 1,
  },
  {
    field: 'address', // New column for email addresses
    headerName: 'Address',
    flex: 1,
  },
  {
    field: 'city', 
    headerName: 'City',
    flex: 1,
  },
  {
    field: 'zip-code', 
    headerName: 'Zip Code',
    flex: 1,
  },
 
];

const rows = [
  { id: 1, 'register-id': 'REG001', name: 'John Doe', age: 28, phoneNumber: '123-456-7890', email: 'johndoe@example.com', address: '123 Maple St', city: 'New York', 'zip-code': '10001' },
  { id: 2, 'register-id': 'REG002', name: 'Jane Smith', age: 34, phoneNumber: '987-654-3210', email: 'janesmith@example.com', address: '456 Oak Ave', city: 'Los Angeles', 'zip-code': '90001' },
  { id: 3, 'register-id': 'REG003', name: 'Michael Brown', age: 42, phoneNumber: '555-123-4567', email: 'michaelbrown@example.com', address: '789 Pine Blvd', city: 'Chicago', 'zip-code': '60601' },
  { id: 4, 'register-id': 'REG004', name: 'Emily Johnson', age: 30, phoneNumber: '444-555-6666', email: 'emilyj@example.com', address: '101 Birch Dr', city: 'Houston', 'zip-code': '77001' },
  { id: 5, 'register-id': 'REG005', name: 'David Lee', age: 29, phoneNumber: '222-333-4444', email: 'davidl@example.com', address: '234 Cedar Ct', city: 'Phoenix', 'zip-code': '85001' },
  { id: 6, 'register-id': 'REG006', name: 'Sarah Taylor', age: 37, phoneNumber: '111-222-3333', email: 'saraht@example.com', address: '567 Elm St', city: 'San Francisco', 'zip-code': '94101' },
  { id: 7, 'register-id': 'REG007', name: 'James Wilson', age: 25, phoneNumber: '777-888-9999', email: 'jamesw@example.com', address: '890 Walnut Ln', city: 'Boston', 'zip-code': '02101' },
  { id: 8, 'register-id': 'REG008', name: 'Patricia Miller', age: 43, phoneNumber: '333-444-5555', email: 'patriciam@example.com', address: '345 Chestnut Ave', city: 'Miami', 'zip-code': '33101' },
  { id: 9, 'register-id': 'REG009', name: 'Robert Davis', age: 38, phoneNumber: '666-777-8888', email: 'robertd@example.com', address: '678 Spruce Rd', city: 'Seattle', 'zip-code': '98101' },
  { id: 10, 'register-id': 'REG010', name: 'Linda Martinez', age: 31, phoneNumber: '999-000-1111', email: 'lindam@example.com', address: '901 Redwood Ln', city: 'Denver', 'zip-code': '80201' },
  { id: 11, 'register-id': 'REG011', name: 'Charles White', age: 27, phoneNumber: '555-666-7777', email: 'charlesw@example.com', address: '234 Poplar Blvd', city: 'Atlanta', 'zip-code': '30301' },
  { id: 12, 'register-id': 'REG012', name: 'Barbara Clark', age: 36, phoneNumber: '888-999-0000', email: 'barbarac@example.com', address: '567 Fir Ave', city: 'Dallas', 'zip-code': '75201' },
  { id: 13, 'register-id': 'REG013', name: 'Paul Walker', age: 40, phoneNumber: '444-777-1111', email: 'paulw@example.com', address: '890 Palm St', city: 'San Diego', 'zip-code': '92101' },
  { id: 14, 'register-id': 'REG014', name: 'Susan Lewis', age: 33, phoneNumber: '123-456-7891', email: 'susanl@example.com', address: '123 Pine Ct', city: 'Orlando', 'zip-code': '32801' },
  { id: 15, 'register-id': 'REG015', name: 'Kevin Hall', age: 29, phoneNumber: '789-012-3456', email: 'kevinh@example.com', address: '456 Oak Ln', city: 'Philadelphia', 'zip-code': '19101' },
];


export default function ContactTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
