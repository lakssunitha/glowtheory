
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="page-banner">
        <p className="tagline">GET TO KNOW US</p>
        <h1>Our Story</h1>
        <p>Skincare inspired by simplicity and self-love.</p>
      </section>

      <section className="section story about-story">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900"
            alt="GlowTheory skincare collection"
          />
        </div>

        <div className="story-content">
          <p className="tagline">WELCOME TO GLOWTHEORY</p>

          <h2>
            Beauty Begins With <span>Care.</span>
          </h2>

          <p>
            GlowTheory is a skincare concept built around
            everyday beauty, simple routines and self-care.
          </p>

          <p>
            We believe everyone deserves to feel comfortable
            and confident in their own skin. Our goal is to
            make skincare easier to understand and enjoy.
          </p>

          <Link to="/services" className="primary-btn">
            EXPLORE OUR SERVICES
          </Link>
        </div>
      </section>

      <section className="section values">
        <div className="section-heading">
          <p className="tagline">WHAT WE BELIEVE</p>
          <h2>Our Core Values</h2>
        </div>

        <div className="value-grid">
          <div className="value-card">
            <span>01</span>
            <h3>Simplicity</h3>
            <p>Skincare routines that are easy to understand.</p>
          </div>

          <div className="value-card">
            <span>02</span>
            <h3>Self-Care</h3>
            <p>Making time for yourself every single day.</p>
          </div>

          <div className="value-card">
            <span>03</span>
            <h3>Confidence</h3>
            <p>Celebrating your natural beauty and individuality.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
