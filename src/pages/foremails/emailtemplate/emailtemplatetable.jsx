import React from "react";
import { FaEnvelope, FaEdit } from "react-icons/fa";
import Sidebar from "../../../components/sidebar/Sidebar";

const EmailTemplateTable = () => {
  const templates = [
    { name: "Welcome Email",  status: "Deactivated" },
    { name: "New week Email", status: "Deactivated" },
    { name: "New Month Email", status: "Deactivated" },
    { name: "New Year Email", status: "Deactivated" }
  ];

  return (
  <>
  <Sidebar />

    <div className="main-content mt-5 mb-5">

      <div className="card shadow-sm border-0">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="fw-semibold mb-0">Email Template</h4>

            <div className="ms-auto">
              <input
                type="search"
                placeholder="Search..."
                className="form-control form-control-sm"
                style={{ width: "200px" }}
              />
            </div>
          </div>

          <div className="table-responsive">
            <table className="table align-middle table-hover">
              <thead className="table-light">
                <tr>
                  <th>EMAIL FOR</th>
                  <th>STATUS</th>
                  <th className="text-center">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {templates.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div
                          className="rounded-circle bg-light d-flex justify-content-center align-items-center me-3"
                          style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "#f2f0ff",
                          }}
                        >
                          <FaEnvelope size={18} color="#6f42c1" />
                        </div>
                        <div>
                          <div className="fw-semibold">{item.name}</div>
                          <small className="text-muted">{item.for}</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span
                        className="badge px-3 py-2 rounded-pill"
                        style={{
                          backgroundColor: "#ff5c8a",
                          color: "#fff",
                          fontWeight: "500",
                        }}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "#6f42c1",
                          color: "#fff",
                          borderRadius: "50%",
                        }}
                      >
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>

</>
  );
}


export default EmailTemplateTable;