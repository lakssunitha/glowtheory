import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="/" className="logo footer-logo">
          Glow<span>Theory.</span>
        </Link>

        <p>Everyday skincare. Everyday confidence.</p>
      </div>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <p className="copyright">
        © 2026 GlowTheory. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;