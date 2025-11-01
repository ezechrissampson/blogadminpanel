import React from "react"
import Sidebar from "../../../components/sidebar/Sidebar";
import Emaileditor from "../emaileditor";

const CustomEmail = () => {
  return (
    <>
      <Sidebar />

    <div className="main-content">
      <h4>Create Custom Email</h4>
      <Emaileditor />
    </div>

    </>
  );
};

export default CustomEmail;
