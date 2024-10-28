import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar as RechartsBar, // Rename the Bar import to avoid conflicts
  ResponsiveContainer,
} from "recharts";
import { Box } from '@mui/material';

import { barData } from '../utils/constant';

const BarGraph = () => {
  return (
    <Box
      display="flex"
      flexDirection="column" // Use camelCase for property names
      flexGrow={1}
      height="80%" // Set height to 100% or desired value
      minHeight="300px" // Set a minimum height if needed
    >
      <ResponsiveContainer width="100%" height="100%"> {/* Set height to 100% */}
        <BarChart
          data={barData}
          margin={{
            top: 30,
            bottom: 0, // Adjust bottom margin if needed
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" type="category" />
          <YAxis type="number" />
          <Tooltip />
          <Legend />
          <RechartsBar dataKey="pv" stackId="a" fill="#ffb5b5" />
          <RechartsBar dataKey="uv" stackId="a" fill="#bbe4e9" />
          <RechartsBar dataKey="amt" stackId="a" fill="#ff9a3c" />
          <RechartsBar dataKey="count" stackId="a" fill="#ffcab0" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BarGraph;
