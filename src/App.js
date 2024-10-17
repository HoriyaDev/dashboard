// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ManageTeam from './pages/ManageTeam' 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/manage-team' element={<ManageTeam />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
