
import * as React from 'react';
import Cards from "../component/Cards";
import Revenue from '../component/Card/Revenue';
import Campaign from '../component/Card/Campaign';
import QuantityBar from '../component/Card/QuantityBar';
import Geography from '../component/Card/Geography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomTable from '../component/Card/Table';

export default function Body() {
  return (
    <>
      <Cards />
      <Box display='flex' gap={2} marginTop={1}>
        <Revenue />
        <CustomTable />
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: '5px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Campaign />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <QuantityBar />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Geography />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
