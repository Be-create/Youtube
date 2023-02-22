import React from 'react'

import { BrowserRouter, Routes,Route } from 'react-router-dom'
import {Box} from "@mui/material"
import Navbar from './pages/components/navbar';

function App() {
  return (
    <Box>
      <Navbar></Navbar>
    </Box>
  );
}

export default App;
