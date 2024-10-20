
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ManageTeam from './pages/ManageTeam' 
import Main from './pages/Main';


const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
       
        <Route path='/manage-team' element={<ManageTeam />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;



// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import SideBar from './component/SideBar'; 

// const App = () => {


//   return (
//     <div>
     
//       <SideBar open={open} onClose={handleToggleDrawer} />
//     </div>
//   );
// };

// export default App;
