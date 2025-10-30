import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Allposts from './pages/forposts/allpost.jsx';
import Addnewpost from './pages/forposts/addnewpost.jsx';
import Allpages from './pages/forpages/allpages.jsx';
import Addnewpage from './pages/forpages/addnewpage.jsx';
import MediaLibrary from './pages/medialibrary/medialibrary.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

         <Route path="/allposts" element={<Allposts/>} />

          <Route path="/addnewpost" element={<Addnewpost/>} />

          <Route path="/allpages" element={<Allpages/>} />

          <Route path="/addnewpage" element={<Addnewpage/>} />

          <Route path="/medialibrary" element={<MediaLibrary/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
