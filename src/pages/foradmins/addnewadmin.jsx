import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Addnewadmin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(
    "uaQBUq2xN9Do(3mAREu7TOCS"
  );
  const [role, setRole] = useState("Subscriber");
  const [sendEmail, setSendEmail] = useState(true);

  return (
<>

<Sidebar />

    <div className="main-content mt-5 mb-5">
      <h3 className="mb-4 fw-semibold">Add User</h3>
      <p className="text-muted mb-4">
        Create a brand new user and add them to this site.
      </p>

      <form className="border p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Username (required)</label>
          <input type="text" className="form-control" placeholder="Username" />
        </div>

        <div className="mb-3">
          <label className="form-label">Email (required)</label>
          <input type="email" className="form-control" placeholder="Email" />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" placeholder="First Name" />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Website</label>
          <input type="url" className="form-control" placeholder="https://example.com" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className="d-flex mb-2">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm me-2"
              onClick={() =>
                setPassword(Math.random().toString(36).slice(-12))
              }
            >
              Generate password
            </button>
          </div>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control border-success"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <small className="text-success fw-semibold">Strong</small>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={sendEmail}
            onChange={() => setSendEmail(!sendEmail)}
            id="sendEmail"
          />
          <label className="form-check-label" htmlFor="sendEmail">
            Send the new user an email about their account
          </label>
        </div>

        <div className="mb-4">
          <label className="form-label">Role</label>
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Subscriber</option>
            <option>Contributor</option>
            <option>Author</option>
            <option>Editor</option>
            <option>Administrator</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>

</>
  );
}

export default Addnewadmin;
