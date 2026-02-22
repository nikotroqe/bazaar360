import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = true;
    if (!form.lastName.trim()) newErrors.lastName = true;
    if (!form.email.trim()) newErrors.email = true;
    if (!form.subject.trim()) newErrors.subject = true;
    if (!form.message.trim()) newErrors.message = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <>
      {/* HERO */}
      <header className="contact-hero text-white text-center">
        <div className="container">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="lead">Get in touch with the Bazaar360 team</p>
        </div>
      </header>

      {/* CONTACT SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">

            {/* INFO */}
            <div className="col-lg-5">
              <h3 className="fw-bold mb-3">Get in Touch</h3>
              <p className="text-muted mb-4">
                Whether you are an artisan, a visitor, or a cultural partner,
                we are excited to hear from you and connect!
              </p>

              {/* INFO CARD WITH BORDER */}
              <div className="contact-info-card p-3 border rounded">
                <ul className="list-unstyled mb-0">
                  <li className="contact-item mb-3">
                    <i class="bi bi-geo-alt-fill contact-icon"></i>
                    <span className="contact-text">
                      <strong>Location:</strong><br />
                      Municipality of Tirana, Tirana, Albania
                    </span>
                  </li>
                  <li className="contact-item mb-3">
                    <i class="bi bi-envelope contact-icon"></i>
                    <span className="contact-text">
                      <strong>Email:</strong><br />
                      bazaar360@tirana.al
                    </span>
                  </li>
                  <li className="contact-item mb-3">
                    <i className="bi bi-telephone contact-icon"></i>
                    <span className="contact-text">
                      <strong>Phone:</strong><br />
                      N/A
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FORM */}
            <div className="col-lg-7">
              <div className="contact-card">
                <form onSubmit={handleSubmit} noValidate>

                  {/* First Name + Last Name in two columns */}
                  <div className="row mb-3">
                    <div className="col">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                        value={form.firstName}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">Please enter your first name.</div>
                    </div>
                    <div className="col">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                        value={form.lastName}
                        onChange={handleChange}
                      />
                      <div className="invalid-feedback">Please enter your last name.</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      value={form.email}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email.
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      placeholder="Write your message here"
                      rows="5"
                      className={`form-control ${errors.message ? "is-invalid" : ""}`}
                      value={form.message}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">Message cannot be empty.</div>
                  </div>

                  <button type="submit" className="btn btn-danger px-4">
                    Send Message
                  </button>

                  {submitted && (
                    <p className="text-success mt-3">
                      ✔ Your message has been sent successfully.
                    </p>
                  )}

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;