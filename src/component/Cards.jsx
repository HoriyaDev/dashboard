
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { chartData } from '../utils/constant';
import Grid from '@mui/material/Grid2'; 


export default function Cards() {
  return (
    <Box>
      <Grid container spacing={3}>
        {chartData.map((chart) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={chart.id}>
            <Box
              display="flex"
              backgroundColor="#00416A"
              alignItems="center"
              justifyContent="space-evenly"
              
              borderRadius={2}
              height="120px"
              width='18vw'
              boxShadow={2}
            >
              
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                flexGrow={1}
                paddingLeft={2}
              >
                <Box color='green'>{chart.icon}</Box>
                <Typography variant="h8" color="white">{chart.number}</Typography>
                <Typography variant="subtitle1" color="green">{chart.name}</Typography>
              </Box>

              {/* Right Side: Pie Chart */}
              <Box display='flex' alignItems='start' justifyContent='flex-end' backgroundColor='red'  width="40%" height="100%">
                <PieChart sx={{marginLeft:'80%'}} 
                  series={[
                    {
                      data: chart.series,
                      innerRadius: 15, // Creates the donut shape
                      outerRadius: 20, // Controls the outer size
                    },
                  ]}
                  width={50} // Adjusted width to make the chart visible
                  height={100} // Adjusted height to make the chart visible
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}



