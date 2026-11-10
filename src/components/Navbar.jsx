import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        Glow<span>Theory.</span>
      </Link>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About Us</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        <Link to="/login" onClick={closeMenu}>Login</Link>
        <Link to="/register" className="register" onClick={closeMenu}>
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;