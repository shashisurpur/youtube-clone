
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import React from "react";

import FeedComp from "./components/Feed/FeedComp";
import ChannelDetails from './components/Feed/Videos/Channels/ChannelDetails'
import VideoDetail from "./components/Feed/Videos/VideoDetail ";
import SearchFeed from "./components/NavBar/SearchFeed";


function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: '#000' }}>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<FeedComp />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:channelId' element={<ChannelDetails />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
