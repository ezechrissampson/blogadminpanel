import React from "react";
import RichTextEditor from "../../components/richtexteditor";
import Sidebar from "../../components/sidebar/Sidebar";


 const Addnewpost = () => {
  const handleSavePost = (html) => {
    console.log("Post HTML:", html);
    // You can send `html` to your backend here via Axios or fetch()
  };

  return (
   <>
     <Sidebar />
    
    <div className="p-4 main-content">
      <RichTextEditor onSave={handleSavePost} />
    </div>

    </>
  );
}

export default Addnewpost