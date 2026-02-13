import React from "react";
import "./OilandGas.css"; // import the custom CSS file

const OilAndGasHomepage = () => {
  return (
    <div className="og-homepage">
      
      {/* --- Header & Navigation --- */}
      <header className="og-header">
        <div className="og-container">
          <div className="og-header-content">
            <div className="og-logo">
              <span className="og-logo-highlight">ENERGY</span>CORE
            </div>
            <nav className="og-nav">
              <ul>
                <li><a href="#home" className="active">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/operations">Operations</a></li>
                <li><a href="/sustainability">Sustainability</a></li>
                <li><a href="/investors">Investors</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
            <a href="/reports" className="og-btn og-btn-primary">Reports →</a>
          </div>
        </div>
      </header>

      {/* --- Hero Section --- */}
      <section id="home" className="og-hero">
        <div className="og-container">
          <div className="og-hero-content">
            <div className="og-hero-tagline">
              <span className="og-icon og-icon-oil"></span> Powering Tomorrow
            </div>
            <h1 className="og-hero-title">Advanced Energy <br />for a Changing World</h1>
            <p className="og-hero-text">
              With over 50 years of expertise in exploration, production, and refining, 
              we deliver reliable energy while investing in a sustainable future.
            </p>
            <div className="og-hero-buttons">
              <a href="/operations" className="og-btn og-btn-primary og-btn-large">Our Operations →</a>
              <a href="/sustainability" className="og-btn og-btn-outline">Sustainability Report</a>
            </div>
          </div>
        </div>
        <div className="og-hero-bg-decoration"></div>
      </section>

      {/* --- Key Statistics / About Info (Homepage appropriate) --- */}
      <section className="og-stats">
        <div className="og-container">
          <div className="og-stats-grid">
            <div className="og-stat-item">
              <div className="og-stat-number">50+</div>
              <div className="og-stat-label">Years of Legacy</div>
            </div>
            <div className="og-stat-item">
              <div className="og-stat-number">17</div>
              <div className="og-stat-label">Countries</div>
            </div>
            <div className="og-stat-item">
              <div className="og-stat-number">3.2B</div>
              <div className="og-stat-label">Barrels Annually</div>
            </div>
            <div className="og-stat-item">
              <div className="og-stat-number">12k</div>
              <div className="og-stat-label">Employees</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- About Core Business (Homepage summary) --- */}
      <section className="og-about">
        <div className="og-container">
          <div className="og-about-grid">
            <div className="og-about-content">
              <span className="og-section-tag">Integrated Approach</span>
              <h2 className="og-section-title">From Reservoir to Retail</h2>
              <p className="og-about-text">
                We manage the entire hydrocarbon value chain. Our upstream innovations maximize 
                recovery, while our refineries and petrochemical plants set benchmarks for 
                efficiency and safety. We are also expanding into low-carbon energy.
              </p>
              <div className="og-about-features">
                <div className="og-feature">
                  <span className="og-feature-icon">⛽</span>
                  <div>
                    <h3>Exploration</h3>
                    <p>Deepwater & unconventional</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">🧪</span>
                  <div>
                    <h3>Petrochemicals</h3>
                    <p>Olefins, polyolefins</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">📊</span>
                  <div>
                    <h3>Trading</h3>
                    <p>Global commodities</p>
                  </div>
                </div>
                <div className="og-feature">
                  <span className="og-feature-icon">☀️</span>
                  <div>
                    <h3>New Energy</h3>
                    <p>Solar, CCS, hydrogen</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="og-about-image">
              <div className="og-image-placeholder">
                <span className="og-placeholder-icon">🛢️</span>
                <p>Offshore Platform<br /><span>North Sea Operations</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Global Footprint (Homepage summary) --- */}
      <section className="og-global">
        <div className="og-container">
          <div className="og-section-header">
            <span className="og-section-tag og-section-tag-light">Global Footprint</span>
            <h2 className="og-section-title og-section-title-light">Strategic Operations Worldwide</h2>
            <p className="og-section-desc">
              Our assets span four continents, from the Permian Basin to offshore West Africa and the North Sea.
            </p>
          </div>
          <div className="og-global-grid">
            <div className="og-region-card">
              <span className="og-region-icon">📍</span>
              <h3>Americas</h3>
              <p>Deepwater Gulf of Mexico, Permian Basin, Canadian oil sands.</p>
              <span className="og-region-stats">12 production hubs</span>
            </div>
            <div className="og-region-card">
              <span className="og-region-icon">📍</span>
              <h3>Africa & Middle East</h3>
              <p>Offshore Nigeria, Angola, and partnership in Saudi Arabia.</p>
              <span className="og-region-stats">8 major fields</span>
            </div>
            <div className="og-region-card">
              <span className="og-region-icon">📍</span>
              <h3>Europe & Asia</h3>
              <p>North Sea, Caspian Sea, and refining complex in Singapore.</p>
              <span className="og-region-stats">5 refineries</span>
            </div>
          </div>
          <div className="og-global-footer">
            <a href="/operations" className="og-link">View interactive map →</a>
          </div>
        </div>
      </section>

      {/* --- Sustainability Summary (Homepage appropriate) --- */}
      <section className="og-sustainability">
        <div className="og-container">
          <div className="og-sustainability-grid">
            <div className="og-sustainability-image">
              <div className="og-image-placeholder og-image-placeholder-dark">
                <span className="og-placeholder-icon">🛡️</span>
                <p>Carbon Capture</p>
              </div>
            </div>
            <div className="og-sustainability-content">
              <span className="og-section-tag">Sustainability</span>
              <h2 className="og-section-title">Reducing Emissions, Increasing Access</h2>
              <p className="og-sustainability-text">
                We are committed to net-zero by 2050. Our roadmap includes methane detection, 
                carbon capture and storage (CCS), and investments in renewable diesel and 
                green hydrogen. We believe reliable energy must also be responsible energy.
              </p>
              <div className="og-sustainability-stats">
                <div className="og-sus-stat">
                  <span className="og-sus-number">-35%</span>
                  <span className="og-sus-label">Scope 1 & 2 intensity since 2018</span>
                </div>
                <div className="og-sus-stat">
                  <span className="og-sus-number">$2.5B</span>
                  <span className="og-sus-label">Annual low-carbon investment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Safety & People (Homepage summary) --- */}
      <section className="og-safety">
        <div className="og-container">
          <div className="og-section-header">
            <span className="og-section-tag">Our strength</span>
            <h2 className="og-section-title">Safety First, Always</h2>
            <p className="og-section-desc">
              Our workforce is our most valuable asset. We maintain industry-leading safety standards 
              and foster a culture of inclusion and continuous learning.
            </p>
          </div>
          <div className="og-safety-grid">
            <div className="og-safety-card">
              <span className="og-safety-icon">🛡️</span>
              <h3>0.12 TRIR</h3>
              <p>Total recordable injury rate – best in class</p>
            </div>
            <div className="og-safety-card">
              <span className="og-safety-icon">👥</span>
              <h3>35% Women</h3>
              <p>In technical roles, up 8% from 2020</p>
            </div>
            <div className="og-safety-card">
              <span className="og-safety-icon">🏭</span>
              <h3>10k+</h3>
              <p>Training hours per year per facility</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact & Report CTA (Homepage contact section) --- */}
      <section className="og-cta">
        <div className="og-container">
          <div className="og-cta-content">
            <h2 className="og-cta-title">Ready to see our full impact?</h2>
            <p className="og-cta-text">
              Download our latest Annual & Sustainability Report for detailed financials, 
              operational data, and ESG performance.
            </p>
            <a href="/reports" className="og-btn og-btn-primary og-btn-large">Download Report (PDF) →</a>
            <p className="og-cta-small">Or view our interactive data hub</p>
          </div>
        </div>
      </section>

      {/* --- Footer with Contact Details & Page Links --- */}
      <footer className="og-footer">
        <div className="og-container">
          <div className="og-footer-grid">
            <div className="og-footer-about">
              <div className="og-logo og-footer-logo">
                <span className="og-logo-highlight">ENERGY</span>CORE
              </div>
              <p>Delivering energy for humanity's progress, today and tomorrow.</p>
            </div>
            <div className="og-footer-links">
              <h4>Operations</h4>
              <ul>
                <li><a href="/exploration">Exploration</a></li>
                <li><a href="/production">Production</a></li>
                <li><a href="/refining">Refining</a></li>
                <li><a href="/chemicals">Chemicals</a></li>
              </ul>
            </div>
            <div className="og-footer-links">
              <h4>Sustainability</h4>
              <ul>
                <li><a href="/climate-strategy">Climate strategy</a></li>
                <li><a href="/safety">Safety</a></li>
                <li><a href="/communities">Communities</a></li>
              </ul>
            </div>
            <div className="og-footer-contact">
              <h4>Contact</h4>
              <ul>
                <li><a href="/media">Media inquiries</a></li>
                <li><a href="/investor-relations">Investor relations</a></li>
                <li><a href="/careers">Careers</a></li>
                <li className="og-contact-phone">+1 (555) 123-4567</li>
                <li className="og-contact-email">info@energycore.com</li>
              </ul>
            </div>
          </div>
          <div className="og-footer-bottom">
            <p>© 2025 EnergyCore. All rights reserved.</p>
            <div className="og-footer-legal">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default OilAndGasHomepage;