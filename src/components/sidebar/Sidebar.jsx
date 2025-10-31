import React from "react";
import "./sidebar.css"
import { Link } from "react-router-dom";

const Sidebar = () => {


    return(
        <>
        
    <div className="sidebar d-flex flex-column">
    <h5><i className="bi"></i>Blog Admin Panel</h5>
    <ul className="nav flex-column">

      <li className="nav-item position-relative">
        
    <Link className="nav-link active" to="/"><i className="bi bi-speedometer2"></i> Dashboard</Link>
      </li>

      <li className="nav-item position-relative">
        <a className="nav-link" href="#"><i className="bi bi-stickies"></i> Posts</a>
        <div className="submenu">
          <Link to="/allposts"><i className="bi bi-list-ul"></i> All Posts</Link>
          <Link to="/addnewpost"><i className="bi bi-plus-lg"></i> Add New</Link>
          <a href="#"><i className="bi bi-tags"></i> Categories</a>
        </div>
      </li>

      <li className="nav-item position-relative">
        <a className="nav-link" href="#"><i className="bi bi-image"></i> Media</a>
        <div className="submenu">
          <Link to="/medialibrary"><i className="bi bi-images"></i> Library</Link>
        </div>
      </li>

      <li className="nav-item position-relative">
        <a className="nav-link" href="#"><i className="bi bi-file-earmark-text"></i> Pages</a>
        <div className="submenu">
          <Link to="/allpages"><i className="bi bi-collection"></i> All Pages</Link>
          <Link to="/addnewpage"><i className="bi bi-plus-square"></i> Add New</Link>
        </div>
      </li>

      <li className="nav-item position-relative">
        <Link className="nav-link" to="/comments"><i className="bi bi-chat-dots"></i> Comments</Link>
      </li>


      <li className="nav-item position-relative">
        <a className="nav-link" href="#"><i className="bi bi-palette"></i>Template</a>
        <div className="submenu">
          <Link to="/emailtemplates"><i className="bi bi-brush"></i> Email Template</Link>
          <Link to="/customemail"><i className="bi bi-tools"></i> Custom Email</Link>
        </div>
      </li>

      <li className="nav-item position-relative">
        <a className="nav-link" href="#"><i className="bi bi-plug"></i> Plugins</a>
      </li>

      <li className="nav-item position-relative">
        <a className="nav-link" href="#"><i className="bi bi-people"></i>Admins</a>
        <div className="submenu">
          <Link to="/alladmins"><i className="bi bi-person-lines-fill"></i> All Admins</Link>
          <Link to="/addnewadmin"><i className="bi bi-person-plus"></i> Add New</Link>
        </div>
      </li>

      <li className="nav-item position-relative">
        <Link className="nav-link" to="/subscribers"><i className="bi bi-people"></i>Subscribers</Link>
      </li>

{/*
      <li className="nav-item position-relative"> 
        <a className="nav-link" href="#"><i className="bi bi-wrench"></i> Config</a>
      </li>
*/}
      <li className="nav-item position-relative">
        <a className="nav-link" href="#"><i className="bi bi-gear"></i> Settings</a>
        <div className="submenu">
          <a href="#"><i className="bi bi-sliders"></i> General</a>
          <a href="#"><i className="bi bi-wrench"></i> Config</a>
        </div>
      </li>

    </ul>
  </div>


        </>
    )
}

export default Sidebar