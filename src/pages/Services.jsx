
import { Link } from "react-router-dom";

const services = [
  {
    icon: "✧",
    name: "Daily Skincare Routine",
    description:
      "Build a simple morning and evening skincare routine."
  },
  {
    icon: "❀",
    name: "Hydration Care",
    description:
      "Discover ways to support soft, hydrated-looking skin."
  },
  {
    icon: "♡",
    name: "Skin Care Guidance",
    description:
      "Learn about skincare ingredients and product selection."
  },
  {
    icon: "☼",
    name: "Sun Protection",
    description:
      "Understand daily sunscreen use and sun protection."
  },
  {
    icon: "✿",
    name: "Body Care",
    description:
      "Explore gentle body cleansing and moisturizing habits."
  },
  {
    icon: "◇",
    name: "Beauty Essentials",
    description:
      "Explore everyday essentials for your self-care routine."
  }
];

function Services() {
  return (
    <>
      <section className="page-banner">
        <p className="tagline">EXPLORE GLOWTHEORY</p>
        <h1>Our Services</h1>
        <p>Simple skincare solutions for everyday confidence.</p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="tagline">CARE FOR EVERY YOU</p>
          <h2>Discover Our Skincare World</h2>
          <p>Explore our skincare and self-care categories.</p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <Link to="/contact">Learn More →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <p className="tagline">LET'S CONNECT</p>
          <h2>Need Help With Your Routine?</h2>
          <p>Get in touch with the GlowTheory team.</p>
        </div>

        <Link to="/contact" className="cta-btn">
          CONTACT US →
        </Link>
      </section>
    </>
  );
}

export default Services;
