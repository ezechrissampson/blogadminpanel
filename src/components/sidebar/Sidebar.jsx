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
        <a className="nav-link" href="#"><i className="bi bi-palette"></i> Appearance</a>
        <div className="submenu">
          <a href="#"><i className="bi bi-brush"></i> Themes</a>
          <a href="#"><i className="bi bi-tools"></i> Customize</a>
        </div>
      </li>

      <li className="nav-item position-relative">
        <a className="nav-link" href="#"><i className="bi bi-plug"></i> Plugins</a>
        <div className="submenu">
          <a href="#"><i className="bi bi-puzzle"></i> Installed</a>
          <a href="#"><i className="bi bi-plus-circle"></i> Add New</a>
        </div>
      </li>

      <li className="nav-item position-relative">
        <a className="nav-link" href="#"><i className="bi bi-people"></i> Users</a>
        <div className="submenu">
          <a href="#"><i className="bi bi-person-lines-fill"></i> All Users</a>
          <a href="#"><i className="bi bi-person-plus"></i> Add New</a>
        </div>
      </li>

      <li className="nav-item position-relative">
        <a className="nav-link" href="#"><i className="bi bi-wrench"></i> Tools</a>
        <div className="submenu">
          <a href="#"><i className="bi bi-upload"></i> Import</a>
          <a href="#"><i className="bi bi-download"></i> Export</a>
        </div>
      </li>

      <li className="nav-item position-relative">
        <a className="nav-link" href="#"><i className="bi bi-gear"></i> Settings</a>
        <div className="submenu">
          <a href="#"><i className="bi bi-sliders"></i> General</a>
          <a href="#"><i className="bi bi-link-45deg"></i> Permalinks</a>
        </div>
      </li>

    </ul>
  </div>


        </>
    )
}

export default Sidebar