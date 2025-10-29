import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Allpost from './pages/allpost/allpost.jsx';
import Addnewpost from './pages/addnewpost/addnewpost.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

         <Route path="/allpost" element={<Allpost/>} />

          <Route path="/addnewpost" element={<Addnewpost/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
