import * as React from 'react';
import Cards from "../component/Cards";
import Revenue from '../component/Card/Revenue'
import Compaign from '../component/Card/Campaign';
import QuantityBar from '../component/Card/QuantityBar';
import Geography from '../component/Card/Geography'
import Box from '@mui/material/Box';
import CustomTable from '../component/Card/Table'

export default function Body() {
    
  return (
  <>
   <Cards />
   <Box display='flex' gap={2}>
   <Revenue />
   <CustomTable />
   </Box>
    <Box display='flex' gap={2}>
  <Compaign />
  <QuantityBar />
  <Geography />
  </Box>
  </>
  );
}
