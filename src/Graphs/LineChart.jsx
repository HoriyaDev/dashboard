
import React from "react";
import {
  LineChart as RechartsLineChart, 
  Line,
  XAxis,
  YAxis,

  Tooltip,
  Legend,
} from "recharts";
import { revenueData } from '../utils/constant';

export default function LineChart() { 
  return (
    <RechartsLineChart width={600} height={300}  data={revenueData}>
      
      <XAxis dataKey="name" sx={{color:"white"}} />
      <YAxis sx={{color:"white"}}/>
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke=" #ff7b25" activeDot={{ r: 8 }}   />
      <Line type="monotone" dataKey="uv" stroke="#d64161" />
      <Line type="monotone" dataKey="amt" stroke="#e3eaa7" />
    </RechartsLineChart>
  );
}
