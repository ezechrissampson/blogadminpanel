import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Allposts from './pages/forposts/allpost.jsx';
import Addnewpost from './pages/forposts/addnewpost.jsx';
import Allpages from './pages/forpages/allpages.jsx';
import Addnewpage from './pages/forpages/addnewpage.jsx';
import MediaLibrary from './pages/medialibrary/medialibrary.jsx';
import Comments from './pages/comments/comments.jsx';
import Alladmins from './pages/foradmins/alladmins.jsx';
import Addnewadmin from './pages/foradmins/addnewadmin.jsx';
import Adminprofile from './pages/foradmins/adminprofile.jsx';
import Allsubscribers from './pages/subscribers/subscribers.jsx';
import Subscriberprofile from './pages/subscribers/subscriberprofile.jsx';
import EmailTemplateTable from './pages/foremails/emailtemplate/emailtemplatetable.jsx';
import CustomEmail from './pages/foremails/emailtemplate/customemail.jsx';

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

          <Route path="/comments" element={<Comments/>} />

          <Route path="/alladmins" element={<Alladmins/>} />

          <Route path="/addnewadmin" element={<Addnewadmin/>} />

          <Route path="/adminprofile" element={<Adminprofile/>} />

         <Route path="/subscribers" element={<Allsubscribers/>} />

        <Route path="/subscriberprofile" element={<Subscriberprofile/>} />

        <Route path="/emailtemplates" element={<EmailTemplateTable/>} />

        <Route path="/customemail" element={<CustomEmail/>} />

      </Routes>
    </BrowserRouter>
  ) 
}

export default App
