


import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  LineChart from '../../Graphs/LineChart';
import IconButton from '@mui/material/IconButton';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
    <Box display='flex' justifyContent='space-between' alignItems='center' mx={2}>
                <Box>
                    <Typography color="white">Revenue Generated</Typography>
                    <Typography color="white">$59,432.32</Typography>
                </Box>
                <IconButton sx={{color:'green'}}>
                    <GetAppOutlinedIcon />
                </IconButton>
            </Box>
      <LineChart
      
      
      />
      
     
    </CardContent>
    
  </React.Fragment>
);

export default function Geography() {
  return (
    <Box sx={{ minWidth: 275 , marginTop:'5px', width:'710px ' }}>
      <Card variant="outlined" sx={{backgroundColor:'#00416A'  }}>{card}</Card>
    </Box>
  );
}
