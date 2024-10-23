import * as React from 'react';
import Cards from "../component/Cards";
import LineGraph from '../Graphs/LineGraph'
import Compaign from '../component/Card/Campaign';
import QuantityBar from '../component/Card/QuantityBar';
import Geography from '../component/Card/Geography'
import Box from '@mui/material/Box';

export default function Body() {
    
  return (
  <>
   <Cards />
   <LineGraph />
  <Box display='flex' gap={2}>
  <Compaign />
  <QuantityBar />
  <Geography />
  </Box>
  </>
  );
}
