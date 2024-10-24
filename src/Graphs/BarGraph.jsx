import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import {barData} from '../utils/constant'

const BarGraph = () => {
  
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        width={700}
        height={300}
        data={barData}
        margin={{
          top: 30,
          
          
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" type="category" /> 
        <YAxis type="number" /> 
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#ffb5b5" />
        <Bar dataKey="uv" stackId="a" fill="#bbe4e9" />
        <Bar dataKey="amt" stackId="a" fill="#ff9a3c" />
        <Bar dataKey="count" stackId="a" fill="#ffcab0" />
        
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
