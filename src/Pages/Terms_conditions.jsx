import React from "react";

const TermsConditionsPage = () => {
  const pageStyles = {
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    display: "flex",
    justifyContent: "center",
    padding: "50px 20px",
  };

  const containerStyles = {
    maxWidth: "900px",
    backgroundColor: "#dfdee4",
    borderRadius: "12px",
    padding: "50px 40px",
    boxShadow: "0 12px 25px rgba(0, 0, 0, 0.08)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    lineHeight: 1.8,
  };

  const titleStyles = {
    fontSize: "2.8rem",
    fontWeight: 700,
    marginBottom: "30px",
    textAlign: "center",
    color: "#111",
  };

  const headingStyles = {
    fontSize: "1.6rem",
    fontWeight: 600,
    marginTop: "40px",
    marginBottom: "15px",
    borderBottom: "2px solid #e0e0e0",
    paddingBottom: "5px",
    color: "#222",
  };

  const paragraphStyles = {
    fontSize: "1.05rem",
    marginBottom: "20px",
    color: "#444",
  };

  const emailStyles = {
    fontWeight: 600,
    color: "#0066cc",
  };

  return (
    <div style={pageStyles}>
      <div style={containerStyles}>
        <h1 style={titleStyles}>Terms & Conditions</h1>

        <p style={paragraphStyles}>
          By accessing and using the Enomfon Multimedia Hub website, you agree to
          comply with and be bound by the following terms and conditions. Please
          read them carefully.
        </p>

        <h2 style={headingStyles}>Use of the Website</h2>
        <p style={paragraphStyles}>
          You agree to use this website only for lawful purposes and in a way that
          does not infringe the rights of others or restrict their use of the
          website.
        </p>

        <h2 style={headingStyles}>Orders and Payments</h2>
        <p style={paragraphStyles}>
          All orders are subject to availability and confirmation of payment. Enomfon Multimedia Hub
          reserves the right to refuse or cancel any order at our discretion.
        </p>

        <h2 style={headingStyles}>Intellectual Property</h2>
        <p style={paragraphStyles}>
          All content on this website, including text, graphics, logos, and images,
          is the property of Enomfon Multimedia Hub and may not be used without
          permission.
        </p>

        <h2 style={headingStyles}>Limitation of Liability</h2>
        <p style={paragraphStyles}>
          Enomfon Multimedia Hub is not liable for any indirect, incidental, or
          consequential damages arising from the use of our website or products.
        </p>

        <h2 style={headingStyles}>Changes to Terms</h2>
        <p style={paragraphStyles}>
          We reserve the right to update these terms at any time. Changes will be
          effective immediately upon posting on this page.
        </p>

        <h2 style={headingStyles}>Contact Information</h2>
        <p style={paragraphStyles}>
          If you have any questions about these terms, please contact us at
          <span style={emailStyles}> support@enomfonmultimediahub.com</span>.
        </p>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
