import React from "react";
import RichTextEditor from "../../components/richtexteditor";
import Sidebar from "../../components/sidebar/Sidebar";


 const Addnewpage = () => {
  const handleSavePost = (html) => {
    console.log("Post HTML:", html);
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

export default Addnewpage