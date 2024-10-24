
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import LineChart from '../../Graphs/LineChart';  // Assuming LineChart is a component for displaying charts

export default function Revenue() {
  return (
    <Box sx={{ flex: 1, margin: '5px' }}>
      <Card variant="outlined" sx={{ backgroundColor: '#00416A', height: '100%' }}>
        <CardContent>
          <Box display='flex' justifyContent='space-between' alignItems='center' mx={2}>
            <Box marginBottom={2}>
              <Typography color="white">Revenue Generated</Typography>
              <Typography color="white">$59,432.32</Typography>
            </Box>
            <IconButton sx={{ color: 'green' }}>
              <GetAppOutlinedIcon />
            </IconButton>
          </Box>
          <LineChart />
        </CardContent>
      </Card>
    </Box>
  );
}
