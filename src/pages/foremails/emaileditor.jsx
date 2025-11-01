import React, { useRef, useState } from "react";
import ReactQuill from "react-quill-new";

export default function Emaileditor({ onSend = (data) => console.log("Email:", data) }) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const quillRef = useRef(null);
  const fileInputRef = useRef(null);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
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
    "link",
    "image",
  ];

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

  const handleSend = () => {
    if (!to || !subject || !body) {
      alert("Please fill all fields before sending!");
      return;
    }

    setSending(true);
    setTimeout(() => {
      onSend({ to, subject, body });
      setSending(false);
      alert("✅ Email sent successfully!");
      setTo("");
      setSubject("");
      setBody("");
    }, 1000);
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-header bg-light">
          <h5 className="mb-0">Compose Email</h5>
        </div>

        <div className="card-body">
          {/* Recipient */}
          <div className="mb-3">
            <label className="form-label fw-semibold">To:</label>
            <input
              type="email"
              className="form-control"
              placeholder="recipient@example.com"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>

          {/* Subject */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Subject:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          {/* Body (ReactQuill) */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Message:</label>
            <ReactQuill
              ref={quillRef}
              theme="snow"
              value={body}
              onChange={setBody}
              modules={modules}
              formats={formats}
              placeholder="Write your email..."
              className="bg-white"
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </div>

          {/* Buttons */}
          <div className="text-end">
            <button
              className="btn btn-primary px-4"
              onClick={handleSend}
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Email"}
            </button>
          </div>
        </div>
      </div>

      {/* Live Preview */}
      <div className="card mt-3">
        <div className="card-body">
          <h6 className="mb-2">Email Preview</h6>
          <div className="border rounded p-3 bg-light">
            <p>
              <strong>To:</strong> {to || "recipient@example.com"}
            </p>
            <p>
              <strong>Subject:</strong> {subject || "(no subject)"}
            </p>
            <div dangerouslySetInnerHTML={{ __html: body || "<em>Your email content...</em>" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
