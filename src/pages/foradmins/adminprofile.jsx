import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar.jsx";


const Adminprofile = () => {
  const [user, setUser] = useState({
    username: "wpdevmode",
    firstName: "",
    lastName: "",
    nickname: "wpdevmode",
    displayName: "wpdevmode",
    email: "ezechrissampson@gmail.com",
    website: "http://localhost/wpdevmode",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
<>

<Sidebar />

    <div className="main-content mt-5 mb-5">
      <h3 className="fw-semibold mb-4">Profile</h3>

      <form className="border p-4 rounded bg-light">
        {/* NAME SECTION */}
        <h5 className="mb-3 fw-semibold">Name</h5>

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={user.username}
            disabled
          />
          <small className="text-muted">Usernames cannot be changed.</small>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Nickname (required)</label>
          <input
            type="text"
            name="nickname"
            value={user.nickname}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Display name publicly as</label>
          <select
            className="form-select"
            name="displayName"
            value={user.displayName}
            onChange={handleChange}
          >
            <option>{user.username}</option>
            <option>{user.nickname}</option>
            <option>{`${user.firstName} ${user.lastName}`.trim()}</option>
          </select>
        </div>

        {/* CONTACT INFO */}
        <h5 className="mb-3 fw-semibold">Contact Info</h5>

        <div className="mb-3">
          <label className="form-label">Email (required)</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="form-control"
          />
          <small className="text-muted">
            If you change this, an email will be sent to confirm your new
            address.
          </small>
        </div>

        <div className="mb-4">
          <label className="form-label">Website</label>
          <input
            type="url"
            name="website"
            value={user.website}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* ABOUT YOURSELF */}
        <h5 className="mb-3 fw-semibold">About Yourself</h5>

        <div className="mb-3">
          <label className="form-label">Biographical Info</label>
          <textarea
            name="bio"
            rows="4"
            value={user.bio}
            onChange={handleChange}
            className="form-control"
            placeholder="Share a little biographical information..."
          ></textarea>
          <small className="text-muted">
            This may be shown publicly.
          </small>
        </div>

        <div className="mb-4 d-flex align-items-center gap-3">
          <img
            src="https://www.gravatar.com/avatar/?d=mp&s=80"
            alt="Profile"
            className="rounded-circle border"
            width="80"
            height="80"
          />
          <a href="https://gravatar.com" target="_blank" rel="noreferrer">
            Change your profile picture on Gravatar
          </a>
        </div>

        {/* ACCOUNT MANAGEMENT */}
        <h5 className="mb-3 fw-semibold">Account Management</h5>

        <div className="mb-3">
          <button type="button" className="btn btn-outline-primary btn-sm">
            Set New Password
          </button>
        </div>

        <div className="mb-4">
          <button type="button" className="btn btn-outline-secondary btn-sm">
            Log Out Everywhere Else
          </button>
          <small className="text-muted ms-2">
            You are only logged in at this location.
          </small>
        </div>

        {/* APPLICATION PASSWORDS */}
        <h5 className="mb-3 fw-semibold">Application Passwords</h5>

        <div className="mb-4">
          <p className="text-muted small">
            Application passwords allow authentication via non-interactive
            systems like XML-RPC or REST API. They can be easily revoked.
          </p>
          <p className="text-muted small mb-0">
            This feature requires HTTPS, which is not enabled on this site.
          </p>
        </div>

        <button type="submit" className="btn btn-primary">
          Update Profile
        </button>
      </form>
    </div>

 </>


  );
}

export default Adminprofile;