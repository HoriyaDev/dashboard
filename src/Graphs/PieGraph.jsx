import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';

export default function PieGraph() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Centers horizontally
        alignItems: 'center',     // Centers vertically
        marginLeft:'80px',  
            // Ensures the Box takes full height of its container
      }}
    >
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10 },
              { id: 1, value: 15 },
            ],
            innerRadius: 60,
          },
        ]}
        width={200}
        height={200}
      />
    </Box>
  );
}
