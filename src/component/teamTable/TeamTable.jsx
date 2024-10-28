import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

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
    field: 'email', // New column for email addresses
    headerName: 'Email',
    flex: 1,
  },
  {
    field: 'accessLevel', // New column for access levels
    headerName: 'Access Level',
    flex: 1,
    renderCell: ({ row: { accessLevel } }) => {
      return (
        <Box
          width='70%'
          display='flex'
          justifyContent='center'
          alignItems='center'
          borderRadius={1}
          marginTop='12px'
          marginLeft={3}
          paddingY='3px'
          backgroundColor={accessLevel === 'Admin' ? '#f44336' : '#4caf50'} // Red for Admin, Green for User
        >
          {accessLevel === 'Admin' && <AdminPanelSettingsOutlinedIcon style={{ color: 'white' }} />}
          {accessLevel === 'User' && <LockOpenOutlinedIcon style={{ color: 'white' }} />}
          <Typography color='white'>{accessLevel}</Typography>
        </Box>
      );
    },
  },
];

const rows = [
  { id: 1, name: 'Jon Snow', age: 35, phoneNumber: '+1 (555) 123-4567', email: 'jon.snow@example.com', accessLevel: 'Admin' },
  { id: 2, name: 'Cersei Lannister', age: 42, phoneNumber: '+1 (555) 234-5678', email: 'cersei.lannister@example.com', accessLevel: 'User' },
  { id: 3, name: 'Jaime Lannister', age: 45, phoneNumber: '+1 (555) 345-6789', email: 'jaime.lannister@example.com', accessLevel: 'User' },
  { id: 4, name: 'Arya Stark', age: 16, phoneNumber: '+1 (555) 456-7890', email: 'arya.stark@example.com', accessLevel: 'User' },
  { id: 5, name: 'Daenerys Targaryen', age: 12, phoneNumber: '+1 (555) 567-8901', email: 'daenerys.targaryen@example.com', accessLevel: 'User' },
  { id: 6, name: 'Melisandre', age: 150, phoneNumber: '+1 (555) 678-9012', email: 'melisandre@example.com', accessLevel: 'Admin' },
  { id: 7, name: 'Ferrara Clifford', age: 44, phoneNumber: '+1 (555) 789-0123', email: 'ferrara.clifford@example.com', accessLevel: 'User' },
  { id: 8, name: 'Rossini Frances', age: 36, phoneNumber: '+1 (555) 890-1234', email: 'rossini.frances@example.com', accessLevel: 'User' },
  { id: 9, name: 'Harvey Roxie', age: 65, phoneNumber: '+1 (555) 901-2345', email: 'harvey.roxie@example.com', accessLevel: 'Admin' },
  { id: 10, name: 'Tyrion Lannister', age: 40, phoneNumber: '+1 (555) 012-3456', email: 'tyrion.lannister@example.com', accessLevel: 'User' },
  { id: 11, name: 'Brienne of Tarth', age: 30, phoneNumber: '+1 (555) 135-2468', email: 'brienne.tarth@example.com', accessLevel: 'User' },
  { id: 12, name: 'Sandor Clegane', age: 50, phoneNumber: '+1 (555) 246-3579', email: 'sandor.clegane@example.com', accessLevel: 'User' },
  { id: 13, name: 'Petyr Baelish', age: 55, phoneNumber: '+1 (555) 357-4680', email: 'petyr.baelish@example.com', accessLevel: 'Admin' },
  { id: 14, name: 'Sansa Stark', age: 22, phoneNumber: '+1 (555) 468-5791', email: 'sansa.stark@example.com', accessLevel: 'User' },
  { id: 15, name: 'Jorah Mormont', age: 40, phoneNumber: '+1 (555) 579-6802', email: 'jorah.mormont@example.com', accessLevel: 'User' },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function TeamTable() {
  return (
    <Paper sx={{ height: 450, width: '100%', backgroundColor: '#1F305E' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          // '& .MuiDataGrid-columnHeaders': { // Fixed this line
          //   backgroundColor: 'orange',
          //   borderBottom: 'none',
          // },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: '#1976d2', 
            color: 'white', 
          },

          '& .MuiDataGrid-row--borderBottom': {
            backgroundColor: '#1976d2', 
            color: 'white', 
          },
          
        }}
      />
    </Paper>
  );
}
