
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="error-page">
      <div className="error-content">
        <p className="tagline">OOPS! SOMETHING WENT WRONG</p>

        <h1>404<span>.</span></h1>

        <h2>Page Not Found</h2>

        <p>
          The page you are looking for may have been moved
          or does not exist.
        </p>

        <Link to="/" className="primary-btn">
          BACK TO HOME →
        </Link>
      </div>

      <div className="error-decoration">✿</div>
    </section>
  );
}

export default NotFound;
