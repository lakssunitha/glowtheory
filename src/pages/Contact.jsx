
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
      <section className="page-banner">
        <p className="tagline">WE WOULD LOVE TO HEAR FROM YOU</p>
        <h1>Contact Us</h1>
        <p>Let's talk skincare and self-care.</p>
      </section>

      <section className="section contact-section">
        <div className="contact-info">
          <p className="tagline">GET IN TOUCH</p>
          <h2>Let's Connect.</h2>

          <p>
            Have a question about GlowTheory? Send us a message
            using the contact form.
          </p>

          <div className="contact-detail">
            <strong>✉ Email</strong>
            <span>hello@glowtheory.com</span>
          </div>

          <div className="contact-detail">
            <strong>♡ Brand</strong>
            <span>GlowTheory Skincare</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="5"
            required
          />

          <button type="submit" className="primary-btn">
            SEND MESSAGE →
          </button>

          {submitted && (
            <p className="success-message">
              Thank you! Your message has been received in this demo.
              No email has been sent.
            </p>
          )}
        </form>
      </section>
    </>
  );
}

export default Contact;
