import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tableData } from '../../utils/constant';
import Box from '@mui/material/Box';

export default function CustomTable() {
  return (
    <TableContainer 
      component={Paper} 
      style={{ 
        maxHeight: 390, 
        overflowY: 'auto', 
        backgroundColor: '#00416A', // Set background color to blue
        width: '350px',
        marginTop: '5px' // Set width to 350px
      }} 
    >
      <Table sx={{ width: '100%', borderCollapse: 'collapse' }} aria-label="simple table"> {/* Set width to 100% to fill the container */}
        <TableHead sx={{ borderBottom: '2px solid #0c2340' }} >
          <TableRow>
            <TableCell style={{ color: 'white', fontWeight: 'bold' }}>Recent transactions</TableCell> {/* Set text color to white for visibility */}
            <TableCell align="right" style={{ color: 'white' }}></TableCell> {/* Set text color to white for visibility */}
            <TableCell align="right" style={{ color: 'white' }}></TableCell> {/* Set text color to white for visibility */}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id} // Use a unique key
              sx={{ borderBottom: '2px solid #0c2340' }} // Set the bottom border to blue
            >
              <TableCell>
                <Box display='flex' flexDirection='column'>
                  <span style={{ marginBottom: '2px' , color:'#3baea0' }}>{row.id}</span> {/* Adjust spacing here */}
                  <span>{row.name}</span>
                </Box>
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}>{row.date}</TableCell> {/* Set text color to white for visibility */}
              <TableCell align="right" style={{ 
                  color: 'white', 
                  backgroundColor: '#3baea0', 
                  borderRadius: '5px', 
                  padding: '4px 8px', // Adjust padding for a smaller background
                  display: 'inline-block',
                  marginTop:'20px' // Make the background fit the text
                }}
              >
                {row.price}
              </TableCell> {/* Set text color to white for visibility */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
