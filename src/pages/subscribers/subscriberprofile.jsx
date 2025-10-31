import React, { useState } from "react";
import BasicInfoTab from "./Userprofiletabs/BasicInfoTab.jsx";
import Comments from "./Userprofiletabs/Comments.jsx";
import TransactionsTab from "./Userprofiletabs/TransactionsTab.jsx";
import Sentemail from "./Userprofiletabs/Sentemail.jsx";
import TicketTab from "./Userprofiletabs/TicketTab.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";


export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("info");

  const renderTabContent = () => {
    switch (activeTab) {
      case "info":
        return <BasicInfoTab />;
      case "comments":
        return <Comments />;
      case "apiusage":
        return <Apiusage />;
      case "transactions":
        return <TransactionsTab />;
      case "sentemail":
        return <Sentemail />;
      case "ticket":
        return <TicketTab />;
      default:
        return null;
    }
  };

  const handleBack = () => {
    // simple browser back navigation
    window.history.back();
  };

  return (
<>
<Sidebar />

    <div className="d-flex">

    <div className="flex-grow-1 p-4 position-relative" style={{ marginLeft: "250px" }}>



    <div className="container py-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Details of Ezekiel Sampson Okon</h4>
        <button onClick={handleBack} className="btn btn-sm btn-primary">
          <i className="bi bi-arrow-left"></i> Back
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white shadow-sm rounded p-4 text-center">
        <div
          className="mx-auto mb-3 d-flex align-items-center justify-content-center"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "#0d2244",
            color: "#fff",
            fontSize: "2rem",
            fontWeight: "600",
          }}
        >
          EO
        </div>
        <h5 className="fw-bold mb-0">Ezekiel Sampson Okon</h5>
        <p className="text-muted mb-3">Nigeria</p>


      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs mt-4">
        {[
          { id: "info", icon: "person", label: "Informations" },
          { id: "comments", icon: "coin", label: "Comments" },
          { id: "transactions", icon: "credit-card", label: "Transactions" },
          { id: "sentemail", icon: "bi bi-envelope", label: "Sent Email" },
          { id: "ticket", icon: "ticket", label: "Ticket" },
        ].map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`bi bi-${tab.icon}`}></i> {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Dynamic Tab Content */}
      {renderTabContent()}
    </div>




    </div>
  </div>

</>
  );
}
