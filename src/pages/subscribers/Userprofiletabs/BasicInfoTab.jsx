import React from "react";

const BasicInfoTab = () => {
  return (
    <div className="tab-section bg-white rounded p-4 mt-3">
      <h6 className="fw-bold mb-3">Basic Info</h6>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <label>First Name:</label>
              <input type="text" className="form-control" value="Ezekiel Sampson" />
            </div>
            <div className="col-md-6">
              <label>Last Name:</label>
              <input type="text" className="form-control" value="Okon" />
            </div>
            <div className="col-md-6">
              <label>Country:</label>
              <input type="text" className="form-control" value="Nigeria" disabled />
            </div>
            <div className="col-md-6">
              <label>Phone:</label>
              <input type="text" className="form-control" value="+2349039650138" />
            </div>
            <div className="col-md-6">
              <label>Username:</label>
              <input type="text" className="form-control" value="Ezechrissampson" />
            </div>
            <div className="col-md-6">
              <label>Email:</label>
              <input type="email" className="form-control" value="ezechrissampson@gmail.com" disabled />
            </div>
            <div className="col-md-6">
              <label>Gender:</label>
              <input type="text" className="form-control" value="Male" />
            </div>
            <div className="col-md-6">
              <label>Skill</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label>City:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label>Interest in:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label>Address:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-6">
              <label>Joining Date:</label>
              <input type="text" className="form-control" value="Fri, Oct 17, 2025 6:42 PM" disabled />
            </div>
          </div>
          <button className="btn btn-primary w-100 mt-3">Save Changes</button>
        </form>
    </div>
  );
}

export default BasicInfoTab;