import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";

const Allpost = () => {

    return(
  <>

<Sidebar />
  
<div className="bg-light main-content">
  <div className="container-fluid p-4">
    <div className="d-flex justify-content-between align-items-center mb-3">
     <h4 className="mb-0">Posts</h4>
    <Link to="/addnewpost">  <button className="btn btn-primary">Add Post</button> </Link>
    </div>


    <div className="mb-3">
      <span className="me-3 text-primary fw-semibold">All (1)</span>
      <span className="text-secondary">Published (1)</span>
    </div>


    <form className="row align-items-center gy-2 mb-3">
      <div className="col-auto">
        <select className="form-select form-select-sm">
          <option>Bulk actions</option>
          <option>Edit</option>
          <option>Move to Trash</option>
        </select>
      </div>
      <div className="col-auto">
        <button type="button" className="btn btn-sm btn-secondary">Apply</button>
      </div>
      <div className="col-auto">
        <select className="form-select form-select-sm">
          <option>All dates</option>
        </select>
      </div>
      <div className="col-auto">
        <select className="form-select form-select-sm">
          <option>All Categories</option>
        </select>
      </div>
      <div className="col-auto">
        <button type="button" className="btn btn-sm btn-secondary">Filter</button>
      </div>
      <div className="col ms-auto">
        <div className="input-group input-group-sm">
          <input type="text" className="form-control" placeholder="Search Posts" />
          <button className="btn btn-outline-secondary" type="button">Search Posts</button>
        </div>
      </div>
    </form>


    <table className="table table-bordered align-middle">
      <thead className="table-light">
        <tr>
          <th><input type="checkbox" className="form-check-input" /></th>
          <th>Title</th>
          <th>Author</th>
          <th>Categories</th>
          <th>Tags</th>
          <th><i className="bi bi-chat"></i></th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" className="form-check-input" /></td>
          <td><a href="#" className="text-decoration-none text-primary fw-semibold">Hello world!</a></td>
          <td>wpdevmode</td>
          <td>Uncategorized</td>
          <td>—</td>
          <td><span className="badge bg-secondary">1</span></td>
          <td>Published 2025/10/18 at 5:30 am</td>
        </tr>
      </tbody>
    </table>

    <p className="text-secondary small mb-4">1 item</p>


    <form className="row align-items-center gy-2">
      <div className="col-auto">
        <select className="form-select form-select-sm">
          <option>Bulk actions</option>
        </select>
      </div>
      <div className="col-auto">
        <button type="button" className="btn btn-sm btn-secondary">Apply</button>
      </div>
    </form>
  </div>


</div>
  
  </>
    )
}

export default Allpost