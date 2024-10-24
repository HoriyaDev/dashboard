
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SideBar from '../component/SideBar';
import Header from '../component/Header' 
import Title from '../component/Title'
import Body from '../Body/Body'

const drawerWidth = 240;




const StyledMain = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? `${drawerWidth}px` : 0,  // Only add margin when drawer is open
    width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
    height:'1090px', // Adjust width based on drawer state
    backgroundColor: '#0C2340', 
 
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



export default function Main(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    console.log("jsssds")
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open={open} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
         
          <Header onOpen = {handleDrawerOpen}  open ={open}/>
        </Toolbar>
      </AppBar>
      <Drawer
        
        variant="persistent"
        anchor="left"
        open={open}
      >
      
        
        <SideBar  open ={open} onClose = {handleDrawerClose} window={props.window} />
     
      </Drawer>
      <StyledMain open={open} >
       <Title />
        <Body />
      
      </StyledMain>
    </Box>
  );
}




