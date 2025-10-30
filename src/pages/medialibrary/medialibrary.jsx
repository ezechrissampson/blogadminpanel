import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";

export default function MediaLibrary() {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [showUploader, setShowUploader] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      const newFile = {
        name: file.name,
        url: fileURL,
        title: file.name.split(".")[0],
        caption: "",
        description: "",
        alt: "",
        uploadedOn: new Date().toLocaleDateString(),
      };
      setMediaFiles([...mediaFiles, newFile]);
      setShowUploader(false);
    }
  };

  const handleDetailChange = (field, value) => {
    setSelectedFile({ ...selectedFile, [field]: value });
    setMediaFiles((prev) =>
      prev.map((file) =>
        file.url === selectedFile.url ? { ...file, [field]: value } : file
      )
    );
  };

  const closeDetails = () => setSelectedFile(null);

  return (
    <>
      <Sidebar />

      <div className="mt-4 main-content d-flex">
        {/* LEFT: Media Library */}
        <div className="flex-grow-1 pe-3">
          {/* Header */}
          <div className="d-flex align-items-center mb-3">
            <h3 className="me-3">Media Library</h3>
            <button
              className="btn btn-outline-primary me-2"
              onClick={() => setShowUploader(true)}
            >
              Add Media File
            </button>
          </div>

          {/* Upload Box */}
          {showUploader && (
            <div className="border border-2 border-secondary-subtle rounded-3 p-5 text-center position-relative mb-4">
              <button
                className="btn-close position-absolute top-0 end-0 m-3"
                onClick={() => setShowUploader(false)}
              ></button>
              <h5>Drop files to upload</h5>
              <p>or</p>
              <label className="btn btn-outline-primary">
                Select Files
                <input
                  type="file"
                  className="d-none"
                  onChange={handleFileUpload}
                  accept="image/*"
                />
              </label>
              <p className="text-muted mt-3">Maximum upload file size: 40 MB.</p>
            </div>
          )}

            {/* Filters and Search */}
        <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex">
          <select className="form-select me-2" style={{ width: "180px" }}>
            <option>All media items</option>
            <option value="Images">Images</option>
            <option value="Videos">Videos</option>
            <option value="Audio">Audio</option>    
            <option value="Documents">Documents</option>
          </select>
          <select className="form-select me-2" style={{ width: "150px" }}>
            <option>All dates</option>
          </select>
        </div>
        <div>
          <label className="me-2">Search media</label>
          <input type="search" className="form-control d-inline-block" style={{ width: "200px" }} />
        </div>
      </div>

          {/* Media Grid */}
          <div className="border border-2 border-light-subtle rounded-3 p-4">
            {mediaFiles.length === 0 ? (
              <p className="text-muted mb-0">No media items found.</p>
            ) : (
              <div className="d-flex flex-wrap justify-content-start gap-3">
                {mediaFiles.map((file, index) => (
                  <div
                    key={index}
                    className={`border rounded overflow-hidden position-relative ${
                      selectedFile?.url === file.url ? "border-primary border-3" : ""
                    }`}
                    style={{ width: "150px", height: "150px", cursor: "pointer" }}
                    onClick={() => setSelectedFile(file)}
                  >
                    <img
                      src={file.url}
                      alt={file.name}
                      className="img-fluid w-100 h-100 object-fit-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Image Details Sidebar */}
        {selectedFile && (
          <div
            className="border-start ps-4"
            style={{
              width: "350px",
              background: "#f9f9f9",
              padding: "20px",
              overflowY: "auto",
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>Attachment details</h5>
              <button className="btn-close" onClick={closeDetails}></button>
            </div>

            <img
              src={selectedFile.url}
              alt={selectedFile.name}
              className="w-100 rounded mb-3"
            />
            <p className="text-muted mb-1">
              <strong>Uploaded on:</strong> {selectedFile.uploadedOn}
            </p>
            <p className="text-muted mb-3">
              <strong>File name:</strong> {selectedFile.name}
            </p>

            <div className="mb-3">
              <label className="form-label">Alternative Text</label>
              <textarea
                className="form-control"
                rows="2"
                value={selectedFile.alt}
                onChange={(e) => handleDetailChange("alt", e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={selectedFile.title}
                onChange={(e) => handleDetailChange("title", e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Caption</label>
              <textarea
                className="form-control"
                rows="2"
                value={selectedFile.caption}
                onChange={(e) => handleDetailChange("caption", e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={selectedFile.description}
                onChange={(e) => handleDetailChange("description", e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">File URL</label>
              <input
                type="text"
                className="form-control"
                readOnly
                value={selectedFile.url}
              />
            </div>

            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-outline-primary btn-sm">
                Download
              </button>
              <button className="btn btn-outline-danger btn-sm">
                Delete Permanently
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
