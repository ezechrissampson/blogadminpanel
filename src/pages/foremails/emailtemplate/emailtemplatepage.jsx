import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Table, Badge } from "react-bootstrap";
import Select from "react-select";
import Emaileditor from "../emaileditor.jsx";
import Sidebar from "../../../components/sidebar/Sidebar";

const EmailTemplatePage = () => {
  const [templates] = useState([
    { id: 1, title: "Welcome Email", status: "Deactivated" },
    { id: 2, title: "New Week Email", status: "Deactivated" },
    { id: 3, title: "New Month Email", status: "Deactivated" },
    { id: 4, title: "New Year Email", status: "Deactivated" },
    { id: 5, title: "Special Offer Email", status: "Deactivated" },
    { id: 6, title: "Custom Email", status: "Deactivated" },
  ]);

  const [subscribers] = useState([
    { name: "Liam Smith", skill: "Frontend Developer", country: "USA", city: "New York" },
    { name: "Noah Anderson", skill: "Backend Developer", country: "Nigeria", city: "Lagos" },
    { name: "Isabella Garcia", skill: "UI/UX Designer", country: "Japan", city: "Tokyo" },
    { name: "Benjamin Lewis", skill: "Fullstack Developer", country: "South Africa", city: "Cape Town" },
    { name: "Amelia Davis", skill: "Technical Writer", country: "United Kingdom", city: "London" },
  ]);

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const [filterType, setFilterType] = useState("all");
  const [selectedValues, setSelectedValues] = useState([]);
  const [emailContent, setEmailContent] = useState("");

  // 🧠 Generate unique list of skills, countries, cities
  const [skillOptions, setSkillOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  useEffect(() => {
    const uniqueSkills = [
      ...new Set(subscribers.map((s) => s.skill)),
    ].map((s) => ({ value: s, label: s }));

    const uniqueCountries = [
      ...new Set(subscribers.map((s) => s.country)),
    ].map((c) => ({ value: c, label: c }));

    const uniqueCities = [
      ...new Set(subscribers.map((s) => s.city)),
    ].map((c) => ({ value: c, label: c }));

    setSkillOptions(uniqueSkills);
    setCountryOptions(uniqueCountries);
    setCityOptions(uniqueCities);
  }, [subscribers]);

  const handleEdit = (template) => {
    setSelectedTemplate(template);
    setEmailContent(template.content || "");
    setShowEditor(true);
  };

  const handleSaveTemplate = () => {
    alert("Template saved successfully!");
    setShowEditor(false);
  };

  const handleSendEmail = () => {
    const values = selectedValues.map((v) => v.value);
    console.log("Sending email:", { filterType, values, selectedTemplate });
    alert(`Email sent to ${filterType} group: ${values.join(", ") || "All users"}`);
    setShowSendModal(false);
  };

  const getFilterOptions = () => {
    if (filterType === "skill") return skillOptions;
    if (filterType === "country") return countryOptions;
    if (filterType === "city") return cityOptions;
    return [];
  };

  return (
  <>
 <Sidebar />

    <div className="main-content mt-4">
      <div className="card shadow-sm border-0 p-4 rounded-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold">Email Templates</h4>
          <Form.Control
            type="text"
            placeholder="Search templates..."
            style={{ width: "250px" }}
          />
        </div>

        {/* Email Template Table */}
        <Table hover responsive className="align-middle">
          <thead className="table-light">
            <tr>
              <th>EMAIL FOR</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {templates.map((template) => (
              <tr key={template.id}>
                <td className="d-flex align-items-center">
                  <span
                    className="rounded-circle bg-light p-3 me-3 d-flex justify-content-center align-items-center"
                    style={{ width: "45px", height: "45px" }}
                  >
                    <i className="bi bi-envelope-fill text-primary fs-5"></i>
                  </span>
                  <span className="fw-semibold">{template.title}</span>
                </td>
                <td>
                  <Badge bg="danger" className="px-3 py-2 rounded-pill">
                    {template.status}
                  </Badge>
                </td>
                <td>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(template)}
                  >
                    <i className="bi bi-pencil-square me-1"></i>Edit
                  </Button>
                  <Button
                    variant="outline-success"
                    size="sm"
                    onClick={() => {
                      setSelectedTemplate(template);
                      setShowSendModal(true);
                    }}
                  >
                    <i className="bi bi-send me-1"></i>Send
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* 🧩 Email Editor Modal */}
      <Modal show={showEditor} size="lg" onHide={() => setShowEditor(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Manual Edit Template - {selectedTemplate?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Emaileditor
            value={emailContent}
            onChange={setEmailContent}
            placeholder="Compose your email content here..."
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditor(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveTemplate}>
            Save Template
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 📤 Send Email Modal */}
      <Modal show={showSendModal} onHide={() => setShowSendModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Send Email - {selectedTemplate?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Send To:</Form.Label>
              <Form.Select
                value={filterType}
                onChange={(e) => {
                  setFilterType(e.target.value);
                  setSelectedValues([]);
                }}
              >
                <option value="all">All Subscribers</option>
                <option value="skill">By Skill</option>
                <option value="country">By Country</option>
                <option value="city">By City</option>
              </Form.Select>
            </Form.Group>

            {filterType !== "all" && (
              <Form.Group className="mb-3">
                <Form.Label>Select {filterType}(s):</Form.Label>
                <Select
                  isMulti
                  options={getFilterOptions()}
                  value={selectedValues}
                  onChange={setSelectedValues}
                  placeholder={`Select ${filterType}(s)...`}
                />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSendModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSendEmail}>
            <i className="bi bi-send me-2"></i>Send Email
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

</>
  );
};

export default EmailTemplatePage;
