// import React from 'react'

// const Campaign = () => {
//   return (
//     <div>Campaign</div>
//   )
// }

// export default Campaign


import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PieGraph from '../../Graphs/PieGraph';

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
        Campaign
      </Typography>
      <PieGraph 
      
      
      />
      <Typography  sx={{ fontSize: 14 , color:'green' ,  textAlign:'center'   }}>
        $48,352 revenue generated
      </Typography>
      <Typography gutterBottom sx={{ fontSize: 14 , color:'white' ,  textAlign:'center'  }}>
       Includes extra micsexpenditures and costs
      </Typography>

     
    </CardContent>
    
  </React.Fragment>
);

export default function Compaign() {
  return (
    <Box sx={{ minWidth: 275 , marginTop:'5px', width:'350px ' }}>
      <Card variant="outlined" sx={{backgroundColor:'#00416A'  }}>{card}</Card>
    </Box>
  );
}
