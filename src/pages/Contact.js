import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
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

    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim()) newErrors.email = true;
    if (!form.message.trim()) newErrors.message = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
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
              <h3 className="fw-bold mb-3">Let’s Connect</h3>
              <p className="text-muted mb-4">
                Whether you are an artisan, a visitor or a cultural partner,
                we would love to hear from you.
              </p>

              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>📍 Location:</strong> Pazari i Ri, Tirana
                </li>
                <li className="mb-3">
                  <strong>📧 Email:</strong> info@bazaar360.al
                </li>
                <li className="mb-3">
                  <strong>📞 Phone:</strong> +355 00 000 000
                </li>
              </ul>
            </div>

            {/* FORM */}
            <div className="col-lg-7">
              <div className="contact-card">
                <form onSubmit={handleSubmit} noValidate>

                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      value={form.name}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                      Please enter your name.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      value={form.email}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      value={form.message}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                      Message cannot be empty.
                    </div>
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
