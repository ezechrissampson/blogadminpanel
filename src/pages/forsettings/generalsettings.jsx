import React, { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Generalsetting = () => {
  const [formData, setFormData] = useState({
    siteName: "",
    tagline: "",
    logo: "",
    favicon: "",
    metaTitle: "",
    metaDescription: "",
    contactEmail: "",
    phone: "",
    address: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    footerText: "",
    maintenanceMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
    console.log(formData);
  };

  return (
 <>
<Sidebar />

    <div className="main-content py-4">
      <h4 className="fw-bold text-primary mb-3">General Site Settings</h4>
      <p className="text-muted">
        Configure basic details of your blog site below.
      </p>

      <Form onSubmit={handleSubmit}>
        <Card className="p-4 border-0 shadow-sm mb-4">
          <h5 className="fw-semibold mb-3 text-secondary">📝 Basic Information</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Label>Site Name</Form.Label>
              <Form.Control
                type="text"
                name="siteName"
                placeholder="Enter site name"
                value={formData.siteName}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Tagline</Form.Label>
              <Form.Control
                type="text"
                name="tagline"
                placeholder="Enter short tagline"
                value={formData.tagline}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Logo URL</Form.Label>
              <Form.Control
                type="url"
                name="logo"
                placeholder="Enter logo image URL"
                value={formData.logo}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Favicon URL</Form.Label>
              <Form.Control
                type="url"
                name="favicon"
                placeholder="Enter favicon image URL"
                value={formData.favicon}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Card>

        <Card className="p-4 border-0 shadow-sm mb-4">
          <h5 className="fw-semibold mb-3 text-secondary">🔍 SEO Information</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Label>Meta Title</Form.Label>
              <Form.Control
                type="text"
                name="metaTitle"
                placeholder="Enter default meta title"
                value={formData.metaTitle}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Meta Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="metaDescription"
                placeholder="Enter meta description"
                value={formData.metaDescription}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Card>

        <Card className="p-4 border-0 shadow-sm mb-4">
          <h5 className="fw-semibold mb-3 text-secondary">📞 Contact Information</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Label>Contact Email</Form.Label>
              <Form.Control
                type="email"
                name="contactEmail"
                placeholder="you@example.com"
                value={formData.contactEmail}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="+234 800 000 0000"
                value={formData.phone}
                onChange={handleChange}
              />
            </Col>
            <Col md={12} className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="address"
                placeholder="Enter physical address"
                value={formData.address}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Card>

        <Card className="p-4 border-0 shadow-sm mb-4">
          <h5 className="fw-semibold mb-3 text-secondary">🌐 Social Media Links</h5>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Label>Facebook</Form.Label>
              <Form.Control
                type="url"
                name="facebook"
                placeholder="https://facebook.com/yourpage"
                value={formData.facebook}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Twitter</Form.Label>
              <Form.Control
                type="url"
                name="twitter"
                placeholder="https://twitter.com/yourhandle"
                value={formData.twitter}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>Instagram</Form.Label>
              <Form.Control
                type="url"
                name="instagram"
                placeholder="https://instagram.com/yourprofile"
                value={formData.instagram}
                onChange={handleChange}
              />
            </Col>
            <Col md={6} className="mb-3">
              <Form.Label>LinkedIn</Form.Label>
              <Form.Control
                type="url"
                name="linkedin"
                placeholder="https://linkedin.com/in/yourprofile"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Card>

        <Card className="p-4 border-0 shadow-sm mb-4">
          <h5 className="fw-semibold mb-3 text-secondary">⚙️ Site Preferences</h5>
          <Row>
            <Col md={12} className="mb-3">
              <Form.Label>Footer Text</Form.Label>
              <Form.Control
                type="text"
                name="footerText"
                placeholder="© 2025 Your Blog Name. All rights reserved."
                value={formData.footerText}
                onChange={handleChange}
              />
            </Col>
            <Col md={12}>
              <Form.Check
                type="switch"
                id="maintenanceMode"
                label="Enable Maintenance Mode"
                name="maintenanceMode"
                checked={formData.maintenanceMode}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Card>

        <div className="text-end">
          <Button variant="primary" type="submit" className="px-4">
            Save Settings
          </Button>
        </div>
      </Form>
    </div>

</>
  );
};

export default Generalsetting;
