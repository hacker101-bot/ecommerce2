import React from "react";

const RefundPolicyPage = () => {
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

  const listStyles = {
    listStyleType: "disc",
    paddingLeft: "20px",
    marginBottom: "20px",
  };

  const listItemStyles = {
    marginBottom: "8px",
    fontSize: "1rem",
  };

  const emailStyles = {
    fontWeight: 600,
    color: "#0066cc",
  };

  return (
    <div style={pageStyles}>
      <div style={containerStyles}>
        <h1 style={titleStyles}>Refund Policy</h1>

        <p style={paragraphStyles}>
          We want you to be satisfied with your purchase. Please read our refund
          policy carefully to understand your rights and responsibilities.
        </p>

        <h2 style={headingStyles}>Eligibility for Refunds</h2>
        <ul style={listStyles}>
          <li style={listItemStyles}>The item must be unused and in its original condition.</li>
          <li style={listItemStyles}>The request must be made within 7 days of delivery.</li>
          <li style={listItemStyles}>Proof of purchase (receipt or order ID) is required.</li>
        </ul>

        <h2 style={headingStyles}>Non-Refundable Items</h2>
        <ul style={listStyles}>
          <li style={listItemStyles}>Digital products or downloadable content.</li>
          <li style={listItemStyles}>Gift cards.</li>
          <li style={listItemStyles}>Items marked as final sale.</li>
        </ul>

        <h2 style={headingStyles}>Refund Process</h2>
        <p style={paragraphStyles}>
          Once your refund request is approved, the refund will be processed to your
          original payment method within 5–10 business days.
        </p>

        <h2 style={headingStyles}>Contact Us</h2>
        <p style={paragraphStyles}>
          If you have questions about our refund policy, please contact us at
          <span style={emailStyles}> support@enomfonmultimediahub.com</span>.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
