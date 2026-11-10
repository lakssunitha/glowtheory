
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login UI demo. Authentication is not connected yet.");
  };

  return (
    <section className="auth-section">
      <div className="auth-card">
        <p className="tagline">WELCOME BACK</p>
        <h1>Login</h1>
        <p>Continue your GlowTheory journey.</p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="primary-btn">
            LOGIN →
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
