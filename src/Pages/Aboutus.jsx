import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./About.css";

const AboutUsPage = () => {
  return (
    <div className="about-page">
      {/* Simple Header - Uses inline styles so it doesn't affect your CSS */}
      <header style={{
        backgroundColor: "#0f172a",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        padding: "16px 0"
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Link to="/" style={{
            fontSize: "24px",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            color: "white",
            textDecoration: "none"
          }}>
            <span style={{ color: "#f97316" }}>ENERGY</span>CORE
          </Link>
          
          <Link to="/" style={{
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "15px",
            padding: "8px 16px",
            backgroundColor: "rgba(249, 115, 22, 0.2)",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#f97316";
            e.target.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(249, 115, 22, 0.2)";
            e.target.style.color = "white";
          }}>
            ← Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-hero-content">
            <span className="about-tagline">Our Story</span>
            <h1 className="about-hero-title">Powering Progress for Over 50 Years</h1>
            <p className="about-hero-text">
              From a single offshore platform to a global energy leader, we've remained 
              committed to delivering reliable energy while pioneering sustainable solutions.
            </p>
          </div>
        </div>
        <div className="about-hero-bg"></div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="about-container">
          <div className="mission-grid">
            <div className="mission-card">
              <span className="mission-icon">🎯</span>
              <h2>Our Mission</h2>
              <p>
                To responsibly provide the energy that powers human progress—safely, 
                efficiently, and sustainably. We bridge today's needs with tomorrow's 
                possibilities through innovation and operational excellence.
              </p>
            </div>
            <div className="mission-card">
              <span className="mission-icon">🌟</span>
              <h2>Our Vision</h2>
              <p>
                To be the most trusted energy partner, leading the transition to a 
                low-carbon future while maintaining energy security and affordability 
                for communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="about-history">
        <div className="about-container">
          <div className="history-header">
            <span className="about-section-tag">Our Legacy</span>
            <h2 className="about-section-title">Five Decades of Excellence</h2>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1973</div>
              <div className="timeline-content">
                <h3>Founded in Houston, Texas</h3>
                <p>Began as a small offshore drilling contractor with a single platform in the Gulf of Mexico.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">1995</div>
              <div className="timeline-content">
                <h3>Global Expansion</h3>
                <p>Expanded operations to West Africa and the North Sea, establishing international presence.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h3>Technology Pioneer</h3>
                <p>Revolutionized deepwater drilling with proprietary technology, setting new safety standards.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h3>Energy Transition Leader</h3>
                <p>Committed $5B to low-carbon solutions including CCS, hydrogen, and renewable diesel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="about-values">
        <div className="about-container">
          <div className="values-header">
            <span className="about-section-tag about-section-tag-light">What We Stand For</span>
            <h2 className="about-section-title about-section-title-light">Our Core Values</h2>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>Nothing is more important than the safety of our people and the communities where we operate.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Environmental Stewardship</h3>
              <p>We minimize our footprint and invest in solutions that protect our planet.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Continuous improvement and breakthrough thinking drive everything we do.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>We operate with transparency, honesty, and respect for all stakeholders.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">👥</div>
              <h3>Inclusion</h3>
              <p>Diverse perspectives make us stronger and more innovative.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Excellence</h3>
              <p>We pursue the highest standards in every operation, every day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="about-leadership">
        <div className="about-container">
          <div className="leadership-header">
            <span className="about-section-tag">Leadership</span>
            <h2 className="about-section-title">Executive Team</h2>
            <p className="leadership-desc">
              Seasoned industry veterans committed to responsible energy development
            </p>
          </div>
          
          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-image">
                <span className="leader-icon">👔</span>
              </div>
              <h3>Michael Chen</h3>
              <p className="leader-title">Chief Executive Officer</p>
              <p className="leader-bio">35 years in oil & gas, former EVP of Global Operations at ExxonMobil</p>
            </div>
            
            <div className="leader-card">
              <div className="leader-image">
                <span className="leader-icon">👩‍🔧</span>
              </div>
              <h3>Sarah Okonkwo</h3>
              <p className="leader-title">Chief Operating Officer</p>
              <p className="leader-bio">20+ years leading deepwater projects in Africa and South America</p>
            </div>
            
            <div className="leader-card">
              <div className="leader-image">
                <span className="leader-icon">👨‍🔬</span>
              </div>
              <h3>David Rodriguez</h3>
              <p className="leader-title">Chief Technology Officer</p>
              <p className="leader-bio">Pioneer in carbon capture and enhanced oil recovery technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="about-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Years in Operation</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">17</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12,000+</div>
              <div className="stat-label">Employees</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$2.5B</div>
              <div className="stat-label">Annual R&D Investment</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-container">
          <div className="cta-content">
            <h2>Partner With Us</h2>
            <p>Join us in shaping the future of energy. Explore career opportunities, investment options, or supply chain partnerships.</p>
            <div className="cta-buttons">
              <Link to="/careers" className="about-btn about-btn-primary">View Careers</Link>
              <Link to="/contact" className="about-btn about-btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer - Uses inline styles so it doesn't affect your CSS */}
      <footer style={{
        background: "#0a0f1a",
        padding: "30px 0",
        borderTop: "1px solid #1e293b"
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Link to="/" style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "white",
            textDecoration: "none"
          }}>
            <span style={{ color: "#f97316" }}>ENERGY</span>CORE
          </Link>
          <Link to="/" style={{
            color: "#94a3b8",
            textDecoration: "none",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: "6px",
            transition: "color 0.2s ease"
          }}
          onMouseEnter={(e) => e.target.style.color = "#f97316"}
          onMouseLeave={(e) => e.target.style.color = "#94a3b8"}>
            ← Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;