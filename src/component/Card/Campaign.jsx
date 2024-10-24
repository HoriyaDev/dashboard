

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PieGraph from '../../Graphs/PieGraph';

export default function CampaignCard() {
  return (
    <Box sx={{ minWidth: 275, marginTop: '15px' }}>
      <Card variant="outlined" sx={{ backgroundColor: '#00416A', height: '100%' }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
            Campaign
          </Typography>
          <PieGraph />
          <Typography sx={{ fontSize: 14, color: 'green', textAlign: 'center' }}>
            $48,352 revenue generated
          </Typography>
          <Typography gutterBottom sx={{ fontSize: 14, color: 'white', textAlign: 'center' }}>
            Includes extra misc expenditures and costs
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}


