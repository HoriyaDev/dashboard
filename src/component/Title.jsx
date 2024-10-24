import React from 'react'
import { Box , Typography } from '@mui/material'
import Button from '@mui/material/Button';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import IconButton from '@mui/material/IconButton';
const Title = () => {
  return (
   <>
    <Box sx={{
        marginTop:'60px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        mx:'10px'
        
    }}>
          <Box>
          <Typography sx={{
            color:'white',
            fontWeight:'bold',
            fontSize:'20px'
          }}>DASHBOARD</Typography>
          <Typography sx={{ color: 'green' }}>
            Welcome to your dashboard
          </Typography>
          </Box>
          <Button variant="Contained" startIcon={<GetAppOutlinedIcon />} sx={{
            backgroundColor:'#0047AB',
            color:'white'
          }}>
       Download Reports
      </Button>
        </Box>
   </>
  )
}

export default Title