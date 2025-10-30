import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";


const Alladmins = () => {
  return (
<>
<Sidebar />


    <div className="p-4 main-content">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h3 className="mb-0">Admins</h3>
      <Link to="/addnewadmin" className="btn btn-primary btn-sm">Add Admin</Link>
      </div>

      {/* Filter Links */}
      <div className="mb-3">
        <a href="#" className="fw-semibold text-decoration-none me-3">
          All (1)
        </a>
        <a href="#" className="text-secondary text-decoration-none">
          Administrator (1)
        </a>
      </div>

      {/* Bulk Actions + Search */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <div className="d-flex align-items-center gap-2">
          <select className="form-select form-select-sm" style={{ width: "150px" }}>
            <option>Bulk actions</option>
            <option>Delete</option>
            <option>Change role to...</option>
          </select>
          <button className="btn btn-outline-primary btn-sm">Apply</button>

          <select className="form-select form-select-sm ms-2" style={{ width: "180px" }}>
            <option>Change role to...</option>
            <option>Administrator</option>
            <option>Editor</option>
            <option>Author</option>
            <option>Subscriber</option>
          </select>
          <button className="btn btn-outline-primary btn-sm">Change</button>
        </div>

        <div className="d-flex align-items-center gap-2">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Search Admins"
            style={{ width: "220px" }}
          />
          <button className="btn btn-outline-primary btn-sm">Search Admins</button>
        </div>
      </div>

      {/* Users Table */}
      <div className="table-responsive bg-white rounded shadow-sm">
        <table className="table align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th style={{ width: "40px" }}>
                <input className="form-check-input" type="checkbox" />
              </th>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Posts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input className="form-check-input" type="checkbox" />
              </td>
              <td className="d-flex align-items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="User Avatar"
                  className="rounded me-2"
                  width="40"
                  height="40"
                />
                <Link to="/adminprofile" className="text-decoration-none fw-semibold">
                  Ezechrissam
                </Link>
              </td>
              <td>Ezechris</td>
              <td>
                <a
                  href="mailto:ezechrissampson@gmail.com"
                  className="text-decoration-none"
                >
                  ezechrissampson@gmail.com
                </a>
              </td>
              <td>Administrator</td>
              <td>
                <a href="#" className="text-decoration-none fw-semibold">
                  1
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Bulk Actions */}
      <div className="d-flex align-items-center mt-3 gap-2 flex-wrap">
        <select className="form-select form-select-sm" style={{ width: "150px" }}>
          <option>Bulk actions</option>
          <option>Delete</option>
          <option>Change role to...</option>
        </select>
        <button className="btn btn-outline-primary btn-sm">Apply</button>

        <select className="form-select form-select-sm ms-2" style={{ width: "180px" }}>
          <option>Change role to...</option>
          <option>Administrator</option>
          <option>Editor</option>
          <option>Author</option>
          <option>Subscriber</option>
        </select>
        <button className="btn btn-outline-primary btn-sm">Change</button>
      </div>

      {/* Footer */}
      <p className="text-muted mt-3 mb-0">1 item</p>
    </div>


</>
  );
};

export default Alladmins;
