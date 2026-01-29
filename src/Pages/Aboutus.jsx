import React from "react";

const AboutUsPage = () => {
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

  const brandStyles = {
    fontWeight: 600,
    color: "#0066cc",
  };

  const listStyles = {
    listStyleType: "disc",
    paddingLeft: "20px",
    marginBottom: "20px",
  };

  const listItemStyles = {
    marginBottom: "8px",
    fontSize: "1rem",
  };

  return (
    <div style={pageStyles}>
      <div style={containerStyles}>
        <h1 style={titleStyles}>About Us</h1>

        <p style={paragraphStyles}>
          Welcome to <span style={brandStyles}>Enomfon Multimedia Hub</span>! We are a
          customer-focused e-commerce platform committed to providing quality
          products at affordable prices.
        </p>

        <p style={paragraphStyles}>
          Our mission is to make online shopping simple, secure, and enjoyable for
          everyone. We carefully select our products and work with trusted
          partners to ensure the best experience for our customers.
        </p>

        <h2 style={headingStyles}>Why Choose Us?</h2>

        <ul style={listStyles}>
          <li style={listItemStyles}>High-quality and authentic products</li>
          <li style={listItemStyles}>Secure payment methods</li>
          <li style={listItemStyles}>Fast and reliable delivery</li>
          <li style={listItemStyles}>Responsive customer support</li>
        </ul>

        <p style={paragraphStyles}>
          Thank you for choosing Enomfon Multimedia Hub. We look forward to serving you and building a
          long-term relationship based on trust and satisfaction.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
