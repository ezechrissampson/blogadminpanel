import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/sidebar/Sidebar";

const   ThirdPartyPlugins = [
  {
    name: "Tawk Chat",
    desc: "Free instant messaging system for real-time customer support.",
    status: false,
    icon: "https://www.smbguide.com/wp-content/uploads/2024/03/tawk.to-review-512x320.png",
  },
  {
    name: "Google reCAPTCHA",
    desc: "Protects your website from spam and abuse without creating friction.",
    status: false,
    icon: "https://www.gstatic.com/recaptcha/api2/logo_48.png",
  },
  {
    name: "Google Analytics (GA4)",
    desc: "Track visitors and collect performance data for your website.",
    status: false,
    icon: "https://logos-world.net/wp-content/uploads/2021/02/Google-Analytics-Logo.png",
  },
  {
    name: "Facebook Messenger",
    desc: "Instant messaging app developed by Meta for chat integration.",
    status: false,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png",
  },
  {
    name: "Google Tag Manager",
    desc: "Manage analytics tags, marketing pixels, and scripts without editing code.",
    status: false,
    icon: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_tag_manager.svg",
  },
  {
    name: "Akismet Anti-Spam",
    desc: "Filters and blocks spam comments and form submissions.",
    status: false,
    icon: "https://ps.w.org/akismet/assets/icon-256x256.png?rev=2578911",
  },
  {
    name: "Mailchimp",
    desc: "Email marketing platform for newsletters and subscriber management.",
    status: false,
    icon: "https://logos-world.net/wp-content/uploads/2021/02/Mailchimp-Logo.png",
  },
  {
    name: "Cookie Consent",
    desc: "Displays GDPR-compliant cookie consent banner for privacy compliance.",
    status: false,
    icon: "https://cdn-icons-png.flaticon.com/512/5977/5977590.png",
  },
  {
    name: "Site Backup",
    desc: "Automatic database and media backup scheduler for data safety.",
    status: false,
    icon: "https://cdn-icons-png.flaticon.com/512/992/992700.png",
  },
  {
    name: "Security Monitor",
    desc: "Protect your site against brute-force attacks and monitor activity logs.",
    status: false,
    icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
  },
];

const Pluginslist = () => {
  const [plugins, setPlugins] = useState(ThirdPartyPlugins);

  const togglePlugin = (index) => {
    const updated = [...plugins];
    updated[index].status = !updated[index].status;
    setPlugins(updated);
  };

  return (
  <>
  <Sidebar />

    <div className="main-content py-4">
      <h4 className="mb-4 fw-bold text-primary">Third Party System Plugins</h4>
      <p className="text-muted">Enable or disable integrations below.</p>
      <Row>
        {plugins.map((plugin, index) => (
          <Col md={6} key={index} className="mb-3">
            <Card className="shadow-sm border-0 p-3 d-flex flex-row align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <img
                  src={plugin.icon}
                  alt={plugin.name}
                  width="45"
                  height="45"
                  className="rounded"
                />
                <div>
                  <h6 className="mb-0">{plugin.name}</h6>
                  <small className="text-muted">{plugin.desc}</small>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Button
                  variant={plugin.status ? "success" : "warning"}
                  className="px-3 py-1 rounded-pill"
                  onClick={() => togglePlugin(index)}
                >
                  {plugin.status ? "Activated" : "Deactivated"}
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>

</>
  );
};

export default Pluginslist;
