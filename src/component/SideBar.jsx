// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Divider from '@mui/material/Divider';
// import Items from '../utils/constant'
// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

// export default function SideBar() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   <Box
//   sx={{
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     padding: '10px',
//     color: '#f9fbe7'
//   }}
// >
//   <Typography variant="h6">ADMINIS</Typography>
//   <IconButton onClick={handleDrawerToggle}>
//     <MenuIcon sx={{
//       color: 'white',
//     }} />
//   </IconButton>
// </Box>


// {/* Profile Section */}
// <Box
//   sx={{
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//     margin: '10px',
//   }}
// >
//   <Avatar alt="Admin" src="pic5.jpg" sx={{ height: '70px', width: '70px' }} />
//   <Typography variant="subtitle1" sx={{
//     color: 'white',
//   }}>Ed Roh</Typography>
//   <Typography variant="caption" sx={{ color: 'green' }}>
//     VP Fancy Admin
//   </Typography>
// </Box>

// <Box sx={{
//   display: 'flex',
//   alignItems: 'center',

//   marginTop: '10px'
// }}>
//   <Button sx={{ textTransform: 'none', color: "red" }}>
//     <HomeOutlinedIcon sx={{
//       marginLeft: '25px'
//     }} />
//     <Typography sx={{
//       marginLeft: '17px',
//       fontSize: '15px',


//     }}>Dashboard</Typography>
//   </Button>
// </Box>


//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <IconButton
//         onClick={handleDrawerOpen}
//         sx={{ margin: 2 }}
//       >
//         <MenuIcon />
//       </IconButton>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <IconButton onClick={handleDrawerClose}>
//           {/* You can add a close icon here if desired */}
//         </IconButton>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
      
//     </Box>
//   );
// }





import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Button from '@mui/material/Button';
import { Items } from '../utils/constant';


const drawerWidth = 250;

function SideBar({onClose , window}) {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
 

  // const handleDrawerClose = () => {
  //   setIsClosing(true);
  //   setMobileOpen(false);
  // };

  // const handleDrawerTransitionEnd = () => {
  //   setIsClosing(false);
  // };

  // const handleDrawerToggle = () => {
  //   if (!isClosing) {
  //     setMobileOpen(!mobileOpen);
  //   }
  // };
  // const handleClose = ()=>{
  //   setOpen(false)
  // }

  const drawer = (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '10px',
          color: '#f9fbe7'
        }}
      >
        <Typography variant="h6">ADMINIS</Typography>
        <IconButton onClick={onClose}>
          <MenuIcon sx={{
            color: 'white',
          }} />
        </IconButton>
      </Box>


      {/* Profile Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          margin: '10px',
        }}
      >
        <Avatar alt="Admin" src="pic5.jpg" sx={{ height: '70px', width: '70px' }} />
        <Typography variant="subtitle1" sx={{
          color: 'white',
        }}>Ed Roh</Typography>
        <Typography variant="caption" sx={{ color: 'green' }}>
          VP Fancy Admin
        </Typography>
      </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',

        marginTop: '10px'
      }}>
        <Button sx={{ textTransform: 'none', color: "red" }}>
          <HomeOutlinedIcon sx={{
            marginLeft: '25px'
          }} />
          <Typography sx={{
            marginLeft: '17px',
            fontSize: '15px',


          }}>Dashboard</Typography>
        </Button>
      </Box>

      {/* Navigation List */}
      <List>
        {Items.map((item, index) => {
          if (item.kind === 'header') {
            return (
              <ListItem key={index}
              >
                <ListItemText primary={item.title} sx={{ fontWeight: 'bold', color: 'white', marginLeft: '7px' }} />
              </ListItem>
            );
          } else {
            return (


              <ListItem key={item.segment} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{
                    marginLeft: '15px',
                    color: 'white',
                    px: '5px'

                  }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      sx: {
                        marginLeft: '-10px',
                        fontSize: '15px',
                        color: 'white',
                        textTransform: 'none',
                      }
                    }}
                  />

                </ListItemButton>
              </ListItem>

            );
          }
        })}
      </List>


    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >

      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          //onTransitionEnd={handleDrawerTransitionEnd}
         // onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#0C2340' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#0C2340' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
}

SideBar.propTypes = {
  window: PropTypes.func,
};

export default SideBar;