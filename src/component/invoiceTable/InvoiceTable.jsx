
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    flex: 1,
  },
  { field: 'phoneNumber', headerName: 'Phone Number', flex: 1 },
  {
    field: 'email', 
    headerName: 'Email',
    flex: 1,
  },
  {
    field: 'cost', 
    headerName: 'Cost',
    flex: 1,
  },
  {
    field: 'date', 
    headerName: 'Date',
    flex: 1,
  },
  
];

const rows = [
    { id: 1, name: 'John Doe', age: 28, phoneNumber: '123-456-7890', email: 'john.doe@example.com', cost: '$120.00', date: '2024-01-15' },
    { id: 2, name: 'Jane Smith', age: 34, phoneNumber: '987-654-3210', email: 'jane.smith@example.com', cost: '$240.50', date: '2024-02-12' },
    { id: 3, name: 'Sam Wilson', age: 30, phoneNumber: '456-789-1234', email: 'sam.wilson@example.com', cost: '$150.75', date: '2024-03-10' },
    { id: 4, name: 'Emily Davis', age: 26, phoneNumber: '654-321-9876', email: 'emily.davis@example.com', cost: '$89.99', date: '2024-04-25' },
    { id: 5, name: 'Michael Brown', age: 40, phoneNumber: '789-123-4567', email: 'michael.brown@example.com', cost: '$310.00', date: '2024-05-05' },
    { id: 6, name: 'Linda Johnson', age: 50, phoneNumber: '321-654-9870', email: 'linda.johnson@example.com', cost: '$220.35', date: '2024-06-18' },
    { id: 7, name: 'Chris Lee', age: 29, phoneNumber: '123-987-6543', email: 'chris.lee@example.com', cost: '$105.00', date: '2024-07-20' },
    { id: 8, name: 'Sarah Miller', age: 36, phoneNumber: '987-321-4567', email: 'sarah.miller@example.com', cost: '$275.90', date: '2024-08-30' },
    { id: 9, name: 'David Garcia', age: 31, phoneNumber: '789-654-3210', email: 'david.garcia@example.com', cost: '$190.00', date: '2024-09-14' },
    { id: 10, name: 'Emma Martinez', age: 42, phoneNumber: '456-123-7890', email: 'emma.martinez@example.com', cost: '$330.80', date: '2024-10-02' },
  ];
  

const paginationModel = { page: 0, pageSize: 5 };

export default function InvoiceTable() {
  return (
    <Paper sx={{ height: 450, width: '100%', backgroundColor: '#1F305E' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          "& .MuiDataGrid-topContainer": {
            backgroundColor: 'white !important',
            borderBottom: "none",
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: '#1976d2',
            color: 'white',
          },
        }}
        
      />
    </Paper>
  );
}
