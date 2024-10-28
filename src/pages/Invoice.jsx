

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SideBar from '../component/SideBar';
import Header from '../component/Header';
import InvoiceTable from '../component/invoiceTable/InvoiceTable';
import { Typography , Box } from '@mui/material';

const drawerWidth = 240;

const StyledMain = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? `${drawerWidth}px` : 0,  
    width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
    height: '100vh', // Adjust width based on drawer state
    backgroundColor: theme.palette.mode === 'dark' ? '#0C2340' : '#f5f5f5', // Use theme mode for background color
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export default function Invoice(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  

  const toggleSidebar = () => {  
    setOpen(!open);  
  };  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open={open} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          
          <Header  onToggle={toggleSidebar} checked={props.darkMode} onChange={props.toggleTheme} />
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        < SideBar    window={props.window} />
      </Drawer>
      <StyledMain open={open}>
      <Box marginTop={7} marginBottom={2}>
      <Typography fontWeight='bold' fontSize={30}>Invoices</Typography>
      <Typography color='#17B169'>List of Invoice Balances</Typography>
      </Box>

      < InvoiceTable />

      </StyledMain>
    </Box>
  );
}


