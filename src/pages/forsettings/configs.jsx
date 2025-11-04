import React, { useState } from "react";
import { Accordion, Card, Form, Button, Col, Row, ToggleButton, ButtonGroup } from "react-bootstrap";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Configs = () => {

       const [siteInfo, setSiteInfo] = useState({
    name: "TechBlog",
    logo: "",
    favicon: "",
    meta: "Your go-to blog for tech trends, tutorials, and insights.",
    contact: "admin@techblog.com",
  });

  // --- Plugin toggles + keys ---
  const [plugins, setPlugins] = useState({
    GoogleAnalytics: { active: true, measurementId: "G-ABCDE1234" },
    recaptcha: { active: false, siteKey: "", secretKey: "" },
    TawkChat: { active: false, widgetId: "" },
    FacebookMessenger: { active: false, pageId: "", appId: "" },
    Mailchimp: { active: true, apiKey: "123abc456xyz", listId: "list_001" },
    CookieConstent: { active: true, message: "We use cookies to improve your experience." },
    Akismet: { active: false, apiKey: "" },
    GoogleTagManager: { active: false, containerId: "" },
    AkismetAntispam: { active: false, apiKey: "" },
    SecurityMonitor: { active: false, apiKey: "" },
  });

  // --- Mail Config ---
  const [mail, setMail] = useState({
    fromName: "TechBlog",
    fromEmail: "no-reply@techblog.com",
    username: "no-reply@techblog.com",
    password: "********",
    host: "smtp.gmail.com",
    port: "465",
    secure: "tls",
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (section, field, value) => {
    if (section === "site") setSiteInfo({ ...siteInfo, [field]: value });
    if (section === "mail") setMail({ ...mail, [field]: value });
  };

  const handlePluginChange = (plugin, field, value) => {
    setPlugins({
      ...plugins,
      [plugin]: { ...plugins[plugin], [field]: value },
    });
  };

  const togglePlugin = (plugin) => {
    setPlugins({
      ...plugins,
      [plugin]: { ...plugins[plugin], active: !plugins[plugin].active },
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    alert("Changes saved successfully!");
  };



    return (
        <>
        <Sidebar />
         
<div className="main-content py-4">
      <h2 className="fw-bold mb-4">🛠️ Site and Plugins Configuration</h2>


      {/* Plugin Configurations */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h5 className="fw-bold mb-3">Third-Party Integrations</h5>
          <Accordion>
            {Object.entries(plugins).map(([key, plugin]) => (
              <Accordion.Item eventKey={key} key={key}>
                <Accordion.Header>
                  <div className="d-flex justify-content-between w-100 align-items-center">
                    <span className="fw-semibold text-capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <Button
                      variant={plugin.active ? "success" : "outline-secondary"}
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlugin(key);
                      }}
                    >
                      {plugin.active ? "Active" : "Inactive"}
                    </Button>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {Object.keys(plugin)
                      .filter((f) => f !== "active")
                      .map((field) => (
                        <Form.Group className="mb-3" key={field}>
                          <Form.Label className="text-capitalize">{field}</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={`Enter ${field}`}
                            value={plugin[field]}
                            onChange={(e) =>
                              handlePluginChange(key, field, e.target.value)
                            }
                            required
                          />
                        </Form.Group>
                      ))}
                    <Button variant="primary" size="sm">
                      Save {key.toUpperCase()} Config
                    </Button>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Card.Body>
      </Card>

      {/* SMTP Config */}
      <Card className="shadow-sm">
        <Card.Body>
          <h5 className="fw-bold mb-3">Mail (SMTP) Settings</h5>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email From Name</Form.Label>
                  <Form.Control
                    required
                    value={mail.fromName}
                    onChange={(e) => handleChange("mail", "fromName", e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email From Address</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    value={mail.fromEmail}
                    onChange={(e) => handleChange("mail", "fromEmail", e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Mail Username</Form.Label>
                  <Form.Control
                    required
                    value={mail.username}
                    onChange={(e) => handleChange("mail", "username", e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Mail Password</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    value={mail.password}
                    onChange={(e) => handleChange("mail", "password", e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>SMTP Host</Form.Label>
                  <Form.Control
                    required
                    value={mail.host}
                    onChange={(e) => handleChange("mail", "host", e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>SMTP Port</Form.Label>
                  <Form.Control
                    required
                    value={mail.port}
                    onChange={(e) => handleChange("mail", "port", e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>SMTP Secure</Form.Label>
                  <Form.Select
                    value={mail.secure}
                    onChange={(e) => handleChange("mail", "secure", e.target.value)}
                  >
                    <option value="tls">TLS</option>
                    <option value="ssl">SSL</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <div className="mt-4">
              <Button variant="secondary" className="me-2">
                Test Connection
              </Button>
              <Button variant="primary" type="submit">
                Save SMTP Settings
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>

        </>
    );
}

export default Configs;