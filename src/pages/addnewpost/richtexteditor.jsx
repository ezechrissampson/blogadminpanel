import React, { useRef, useState } from "react";
import ReactQuill from "react-quill-new";


const RichTextEditor = ({
  initialContent = "",
  onSave = (html) => console.log("Saved HTML:", html),
}) => {
  const [content, setContent] = useState(initialContent);
  const [status, setStatus] = useState("idle");
  const quillRef = useRef(null);
  const fileInputRef = useRef(null);

  // Toolbar setup
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        ["blockquote", "code-block"],
        ["link", "image", "clean"],
      ],
      handlers: {
        image: () => fileInputRef.current.click(),
      },
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "align",
    "blockquote",
    "code-block",
    "link",
    "image",
  ];

  // Handle image upload as base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const editor = quillRef.current.getEditor();
      const range = editor.getSelection(true);
      editor.insertEmbed(range.index, "image", reader.result);
      editor.setSelection(range.index + 1);
    };
    reader.readAsDataURL(file);
  };

  // Save button handler
  const handleSave = () => {
    setStatus("saving");
    setTimeout(() => {
      onSave(content);
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 1200);
    }, 800);
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Blog Post Editor</h5>
          <button className="btn btn-primary btn-sm" onClick={handleSave}>
            {status === "saving" ? "Saving..." : "Save Post"}
          </button>
        </div>

        <div className="card-body">
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            placeholder="Start writing your blog post..."
            className="bg-white"
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />

          <div className="text-end mt-3">
            {status === "saved" && (
              <small className="text-success fw-semibold">✅ Saved!</small>
            )}
          </div>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h6 className="mb-2">Live Preview</h6>
          <div
            className="border rounded p-3 bg-light"
            style={{ minHeight: "120px" }}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </div>
  );
}


export default RichTextEditor