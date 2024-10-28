import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import ManageTeam from './pages/ManageTeam';
import Contact from './pages/Contact'
import Invoice from './pages/Invoice'
import Profile from './pages/Profile'
import Calender from './pages/Calender'
import FAQ from './pages/FAQ'
import BarChart from './pages/BarChart'
import PieChart from './pages/PieChart'
import LineChart from './pages/LineChart'
import GeographyChart from './pages/GeographyChart'
import Main from './pages/Main';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Define a color scheme for light mode
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',  // Primary color for light mode
      },
      secondary: {
        main: '#dc004e',  // Secondary color for light mode
      },
      background: {
        default: '#f5f5f5',  // Light background
        paper: '#ffffff',    // Paper background
      },
      text: {
        primary: '#0C2340',  // Primary text color for light mode
        secondary: '#555555', // Secondary text color
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
  });

  // Define a color scheme for dark mode
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',  // Primary color for dark mode
      },
      secondary: {
        main: '#f48fb1',  // Secondary color for dark mode
      },
      background: {
        default: '#121212',  // Dark background
        paper: '#1d1d1d',    // Paper background in dark mode
      },
      text: {
        primary: '#ffffff',  // Primary text color for dark mode
        secondary: '#b0bec5', // Secondary text color
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
  });

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main toggleTheme={toggleTheme} darkMode={darkMode} />} />
          <Route path='/manage-team' element={<ManageTeam toggleTheme={toggleTheme} darkMode={darkMode} />} />
          <Route path='/contact-information' element={<Contact toggleTheme={toggleTheme} darkMode={darkMode} />} />
          <Route path='/invoices-balances' element={<Invoice toggleTheme={toggleTheme} darkMode={darkMode} />} />
          <Route path='/profile-form' element={<Profile toggleTheme={toggleTheme} darkMode={darkMode} />} />
          <Route path='/calender' element={<Calender toggleTheme={toggleTheme} darkMode={darkMode} />} />
          <Route path='/faq-page' element={<FAQ toggleTheme={toggleTheme} darkMode={darkMode} />} />
          <Route path='/bar-chart' element={<BarChart toggleTheme={toggleTheme} darkMode={darkMode} />} />
          <Route path='/pie-chart' element={<PieChart toggleTheme={toggleTheme} darkMode={darkMode} />} />
          <Route path='/line-chart' element={<LineChart toggleTheme={toggleTheme} darkMode={darkMode} />} />
          <Route path='/geography-chart' element={<GeographyChart toggleTheme={toggleTheme} darkMode={darkMode} />} />
          
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;






