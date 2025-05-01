import React from "react";
import "./index.css";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="main-nav">
        <a href="/" className="logo">newheights</a>
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="menu-icon"></span>
        </button>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#curriculum">Curriculum</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
          <button className="nav-cta">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Master Frontend Development</h1>
          <p className="hero-subtitle">
            From beginner to professional: Build real-world projects with modern web technologies
          </p>
          <div className="hero-cta">
            <button className="primary-btn">Start Learning Now</button>
            <button className="secondary-btn">View Curriculum</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.8/5</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section id="features" className="features-section">
        <h2>Course Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="feature-icon">📚</i>
            <h3>Comprehensive Curriculum</h3>
            <p>From HTML basics to advanced React patterns</p>
          </div>
          <div className="feature-card">
            <i className="feature-icon">💻</i>
            <h3>Hands-on Projects</h3>
            <p>Build 15+ real-world applications</p>
          </div>
          <div className="feature-card">
            <i className="feature-icon">🎓</i>
            <h3>Certificate</h3>
            <p>Industry-recognized certification</p>
          </div>
          <div className="feature-card">
            <i className="feature-icon">👥</i>
            <h3>Community Support</h3>
            <p>Join our active Discord community</p>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="curriculum-section">
        <h2>What You'll Learn</h2>
        <div className="curriculum-grid">
          <div className="module">
            <h3>Module 1: Web Fundamentals</h3>
            <ul>
              <li>✔️ HTML5 Semantic Elements</li>
              <li>✔️ CSS3 & Modern Layouts</li>
              <li>✔️ Responsive Design Principles</li>
              <li>✔️ CSS Flexbox & Grid</li>
            </ul>
          </div>
          <div className="module">
            <h3>Module 2: JavaScript Mastery</h3>
            <ul>
              <li>✔️ ES6+ Features</li>
              <li>✔️ Async Programming</li>
              <li>✔️ DOM Manipulation</li>
              <li>✔️ API Integration</li>
            </ul>
          </div>
          <div className="module">
            <h3>Module 3: React Development</h3>
            <ul>
              <li>✔️ React Fundamentals</li>
              <li>✔️ Hooks & State Management</li>
              <li>✔️ React Router</li>
              <li>✔️ Performance Optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section">
        <h2>Student Success Stories</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <img src="/avatar1.jpg" alt="Student" className="student-avatar" />
            <blockquote>"This course transformed my career. I went from zero coding knowledge to landing a job at a tech startup!"</blockquote>
            <p className="student-info">— Aisha P., Frontend Developer</p>
          </div>
          <div className="testimonial-card">
            <img src="/avatar2.jpg" alt="Student" className="student-avatar" />
            <blockquote>"The project-based learning approach made complex concepts easy to understand and implement."</blockquote>
            <p className="student-info">— Rahul M., Software Engineer</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <h2>Choose Your Learning Path</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Basic</h3>
            <p className="price">$299</p>
            <ul>
              <li>✔️ Full Course Access</li>
              <li>✔️ Project Files</li>
              <li>✔️ Community Access</li>
              <li>❌ 1-on-1 Mentoring</li>
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>
          <div className="pricing-card featured">
            <div className="featured-tag">Most Popular</div>
            <h3>Pro</h3>
            <p className="price">$499</p>
            <ul>
              <li>✔️ Everything in Basic</li>
              <li>✔️ 1-on-1 Mentoring</li>
              <li>✔️ Career Guidance</li>
              <li>✔️ LinkedIn Profile Review</li>
            </ul>
            <button className="pricing-btn featured">Enroll Now</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>FrontendPro Academy</h4>
            <p>Transforming careers through quality education</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#curriculum">Curriculum</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Success Stories</a>
          </div>
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">Discord</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 FrontendPro Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}