


import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GeographyChart } from '../../Graphs/GeographyChart';


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
      <Typography gutterBottom sx={{ color:'white' , fontWeight: 'bold' }}>
        Geography Based Traffic
      </Typography>
      <GeographyChart
      
      
      />
      
     
    </CardContent>
    
  </React.Fragment>
);

export default function Geography() {
  return (
    <Box sx={{ minWidth: 275 , marginTop:'5px', width:'350px ' }}>
      <Card variant="outlined" sx={{backgroundColor:'#00416A'  }}>{card}</Card>
    </Box>
  );
}
