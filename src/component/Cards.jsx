import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { chartData } from '../utils/constant';
import Grid from '@mui/material/Grid'; // Importing Grid2

export default function Cards() {
  return (
    <Box sx={{ width: '100%' , marginLeft:'2px' }} >
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {chartData.map((chart) => (
          <Grid
            item
            key={chart.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ flexGrow: 1, flexBasis: 'calc(100% / 4)', maxWidth: 'calc(100% / 4)' }} // Ensure 4 cards per row max
          >
            <Box
              display="flex"
              backgroundColor="#00416A"
              alignItems="center"
              justifyContent="space-evenly"
              marginTop="15px"
              borderRadius={2}
              height="120px"
              boxShadow={2}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                flexGrow={1}
                paddingLeft={2}
              >
                <Box color="green">{chart.icon}</Box>
                <Typography variant="h8" color="white">
                  {chart.number}
                </Typography>
                <Typography variant="subtitle1" color="green">
                  {chart.name}
                </Typography>
              </Box>

              <PieChart
                sx={{ marginLeft: '80%' }}
                series={[
                  {
                    data: chart.series,
                    innerRadius: 15, // Creates the donut shape
                    outerRadius: 20, // Controls the outer size
                  },
                ]}
                width={50} // Adjusted width to make the chart visible
                height={50}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
