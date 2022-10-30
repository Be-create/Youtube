import React from 'react'

import { BrowserRouter, Routes,Route } from 'react-router-dom'
import {Box} from "@mui/material"
import {Navbar,Feed,SearchFeed,VideoDetails,ChannelDetail} from './components';

function App() {
  return (
    <BrowserRouter>
    <Box>
<Navbar/>
<Routes>

  <Route path='/' exact element={<Feed/>} />
  <Route path='/video/:id' exact element={<VideoDetails/>} />
  <Route path='/channel/:id' exact element={<ChannelDetail/>} />
  <Route path='/search/:id' exact element={<SearchFeed/>} />
</Routes>

    </Box>
    </BrowserRouter>
  );
}

export default App;
