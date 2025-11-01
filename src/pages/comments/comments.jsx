import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

const Comments = () => {


  return (

    <>
        <Sidebar />

  <div className="main-content p-4">
    <h3 className="mb-4">Comments</h3>

    {/* Top Filters */}
    <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
      <div>
        <a href="#" className="text-decoration-none fw-semibold me-2">All (1)</a>
        <a href="#" className="text-decoration-none text-secondary me-2">Mine (0)</a>
        <a href="#" className="text-decoration-none text-secondary me-2">Pending (0)</a>
        <a href="#" className="text-decoration-none text-secondary me-2">Approved (1)</a>
        <a href="#" className="text-decoration-none text-secondary me-2">Spam (0)</a>
        <a href="#" className="text-decoration-none text-secondary">Trash (0)</a>
      </div>
      <div className="ms-auto d-flex gap-2">
        <input type="text" className="form-control form-control-sm" placeholder="Search Comments" />
        <button className="btn btn-primary btn-sm">Search</button>
      </div>
    </div>

    {/* Bulk Actions & Filter */}
    <div className="d-flex align-items-center mb-3 flex-wrap gap-2">
      <div className="d-flex align-items-center gap-2">
        <select className="form-select form-select-sm" style={{ width: "150px" }}>
          <option>Bulk actions</option>
          <option>Approve</option>
          <option>Unapprove</option>
          <option>Mark as Spam</option>
          <option>Move to Trash</option>
        </select>
        <button className="btn btn-outline-primary btn-sm">Apply</button>
      </div>

      <div className="d-flex align-items-center gap-2 ms-3">
        <select className="form-select form-select-sm" style={{ width: "180px" }}>
          <option>All comment types</option>
          <option>Comments</option>
          <option>Trackbacks</option>
          <option>Pingbacks</option>
        </select>
        <button className="btn btn-outline-primary btn-sm">Filter</button>
      </div>
    </div>

    {/* Comments Table */}
    <div className="table-responsive bg-white rounded shadow-sm">
      <table className="table align-middle mb-0">
        <thead className="table-light">
          <tr>
            <th style={{ width: "40px" }}>
              <input className="form-check-input" type="checkbox" />
            </th>
            <th>Author</th>
            <th>Comment</th>
            <th>Post</th>
            <th>Submitted on</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input className="form-check-input" type="checkbox" />
            </td>
            <td className="d-flex align-items-center">
              <img
                src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44b.svg"
                alt="Avatar"
                className="rounded-circle me-2"
                width="40"
                height="40"
              />
              <div>
                <strong> Commenter</strong><br />
                <small className="text-muted">example@gmail.com</small>
              </div>
            </td>
            <td>
              <p className="mb-1">
                Hi, this is a comment
              </p>
            </td>
            <td>
              <a href="#" className="fw-semibold text-decoration-none">Hello world!</a>
              <br />
              <small className="text-muted">View Post</small>
              <span className="badge bg-secondary ms-1">1</span>
            </td>
            <td>
              <small className="text-muted">2025/10/18 at 5:30 am</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Bottom Bulk Actions */}
    <div className="d-flex align-items-center mt-3 gap-2">
      <select className="form-select form-select-sm" style={{ width: "150px" }}>
        <option>Bulk actions</option>
        <option>Approve</option>
        <option>Unapprove</option>
        <option>Mark as Spam</option>
        <option>Move to Trash</option>
      </select>
      <button className="btn btn-outline-primary btn-sm">Apply</button>
    </div>
  </div>

</>
  )

}

export default Comments;