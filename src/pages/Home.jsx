
import { Link } from "react-router-dom";

const products = [
  {
    name: "Hydrating Face Serum",
    category: "DAILY HYDRATION",
    price: "₹599",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700"
  },
  {
    name: "Gentle Face Cleanser",
    category: "GENTLE CLEANSING",
    price: "₹399",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=700"
  },
  {
    name: "Daily Glow Moisturizer",
    category: "SKIN NOURISHMENT",
    price: "₹499",
    image:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=700"
  }
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">NATURE MEETS SKINCARE</p>

          <h1>
            Discover Your
            <br />
            Natural <span>Glow.</span>
          </h1>

          <p className="hero-text">
            Beautiful skin begins with thoughtful care.
            Discover gentle, nourishing skincare essentials
            designed to make you feel confident every day.
          </p>

          <Link to="/services" className="primary-btn">
            EXPLORE COLLECTION →
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1000"
            alt="Premium skincare products"
          />

          <div className="floating-note">
            <strong>Pure Care. Pure Confidence.</strong>
            <span>Your everyday skincare ritual.</span>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div>✧ Gentle Skincare</div>
        <div>✧ Everyday Hydration</div>
        <div>✧ Thoughtful Ingredients</div>
        <div>✧ Your Natural Glow</div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="tagline">OUR COLLECTION</p>
          <h2>Skincare Made Simple</h2>
          <p>
            Discover your everyday essentials for healthy-looking skin.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span>BEST SELLER</span>
              </div>

              <h3>{product.name}</h3>

              <div className="product-bottom">
                <span>{product.price}</span>
                <Link to="/services">Explore →</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="center">
          <Link to="/services" className="outline-btn">
            VIEW ALL COLLECTIONS
          </Link>
        </div>
      </section>

      <section className="story section">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=900"
            alt="Skincare and self-care"
          />
        </div>

        <div className="story-content">
          <p className="tagline">THE GLOWTHEORY STORY</p>

          <h2>
            Because Your Skin Deserves <span>More.</span>
          </h2>

          <p>
            At GlowTheory, we believe skincare should be
            simple, enjoyable and consistent. Our philosophy
            is to celebrate your natural beauty with thoughtful
            skincare choices.
          </p>

          <Link to="/about" className="text-link">
            DISCOVER OUR STORY →
          </Link>
        </div>
      </section>

      <section className="testimonial section">
        <p className="tagline">CUSTOMER LOVE</p>
        <h2>Words That Make Us Glow</h2>

        <div className="testimonial-card">
          <div className="stars">★★★★★</div>

          <p>
            "A beautiful skincare experience! I love the
            simple approach and the focus on everyday skin care."
          </p>

          <strong>— GlowTheory Customer</strong>
        </div>
      </section>

      <section className="cta">
        <div>
          <p className="tagline">YOUR SKINCARE JOURNEY STARTS HERE</p>
          <h2>Ready to Find Your Glow?</h2>
          <p>Make self-care your favourite everyday ritual.</p>
        </div>

        <Link to="/register" className="cta-btn">
          JOIN GLOWTHEORY →
        </Link>
      </section>
    </>
  );
}

export default Home;
