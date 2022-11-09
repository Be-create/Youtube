import React from 'react'

import { BrowserRouter, Routes,Route } from 'react-router-dom'
import {Box} from "@mui/material"
import {Navbar,Feed,SearchFeed,VideoDetails,ChannelDetail, Sidebar} from './components';

function App() {
  return (
    <BrowserRouter>
    <Box>
    <Navbar/>
<Box  sx={{ display: 'flex' }}>
  
  <Sidebar/>
<Routes>

<Route path='/' exact element={<Feed/>} />
<Route path='/video/:id' exact element={<VideoDetails/>} />
<Route path='/channel/:id' exact element={<ChannelDetail/>} />
<Route path='/search/:id' exact element={<SearchFeed/>} />
</Routes>
</Box>


    </Box>
    </BrowserRouter>
  );
}

export default App;
