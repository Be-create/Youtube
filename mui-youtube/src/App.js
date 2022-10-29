import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import {Box} from "@mui/material"
import Feed from './Feed';
import VideoDetails from './VideoDetails';
import ChannelDetail from './ChannelDetail';
import SearchFeed from './SearchFeed';
function App() {
  return (
    <BrowserRouter>
    <Box sx={{ backgroungColor:"#000"}}>
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
