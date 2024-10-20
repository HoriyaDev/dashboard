import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 250;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#0C2340',
  width: '100%',  // Full width in the grid
  [theme.breakpoints.up('sm')]: {
    width: '100%',  // Full width for larger screens
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  color: 'white',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  width: '100%',  // Take the full width of the search container
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',  
      '&:focus': {
        width: '15ch', 
      },
    },
  },
}));

export default function Header({ onOpen, open }) {
  return (
    <Box sx={{ flexGrow: 1, width: open ? `calc(100% - ${drawerWidth}px)` : '100%', transition: 'width 0.3s ease' }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 2, paddingRight: 2 }} disableGutters>
          <Grid container spacing={2}>
            <Grid item xs={8}> {/* Take 8 columns for the header */}
              <IconButton onClick={onOpen} sx={{ color: 'white' }}>
                <MenuIcon />
              </IconButton>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Grid>

            <Grid item xs={4}> {/* Take 4 columns for the icons */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton>
                  <DarkModeOutlinedIcon sx={{ color: 'white' }} />
                </IconButton>
                <IconButton>
                  <NotificationsNoneOutlinedIcon sx={{ color: 'white' }} />
                </IconButton>
                <IconButton>
                  <SettingsOutlinedIcon sx={{ color: 'white' }} />
                </IconButton>
                <IconButton>
                  <PersonOutlineOutlinedIcon sx={{ color: 'white' }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}