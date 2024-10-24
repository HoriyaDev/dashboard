import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BarGraph from '../../Graphs/BarGraph';

export default function QuantityBarCard() {
  return (
    <Box sx={{ minWidth: 275, marginTop: '15px' }}>
      <Card variant="outlined" sx={{ backgroundColor: '#00416A', height: '100%' }}>
        <CardContent>
          <Typography sx={{ color: 'white', fontWeight: 'bold' }}>
            Sales Quantity
          </Typography>
          <BarGraph />
        </CardContent>
      </Card>
    </Box>
  );
}
