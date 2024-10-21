import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography, IconButton } from '@mui/material';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';

// Data arrays
const uData = [145, 250, 200, 270, 189, 290, 490, 350, 200, 150, 100]; 
const pData = [240, 398, 280, 308, 480, 367, 430, 390, 250, 200, 150]; 
const qData = [242, 138, 180, 398, 482, 300, 439, 350, 400, 200, 150]; 
const xLabels = [
    'plane',
    'helicopter',
    'boat',
    'train',
    'subway',
    'bus',
    'car',
    'moto',
    'bicycle',
    'skateboard',
    'other'
];

// Styles
const circleStyle = {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '8px',
};

const legendStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
    color: 'white'
};

const seriesColors = ['red', 'blue', 'green']; // Define colors for each series
const seriesLabels = ['US', 'France', 'Japan']; // Labels for each series

export default function LineGraph() {
    return (
        <Box backgroundColor="#00416A" width='60%' marginTop={2}>
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
                width={500}
                height={200}
                series={[
                    { data: pData },
                    { data: uData },
                    { data: qData },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
               
            />

            {/* Custom Legend */}
            <Box style={legendStyle}>
                {seriesLabels.map((label, index) => (
                    <Box key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                        <span style={{ ...circleStyle, backgroundColor: seriesColors[index] }}></span>
                        <Typography color="white">{label}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
