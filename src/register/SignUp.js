import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    category: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Placeholder logic
    console.log("Signup data:", formData);
    alert("Account created successfully!");

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      category: "",
      location: "",
      description: "",
    });
  };

  return (
    <section className="signup-section d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow p-4">
              <h3 className="text-center fw-bold mb-4">
                Create an Account
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Password</label>
                        <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        placeholder="+355"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <label className="form-label">Category</label>
                        <select
                        className="form-control"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        >
                        <option value="">Choose category</option>
                        <option value="artisan">Artisan</option>
                        <option value="business">Business</option>
                        <option value="visitor">Visitor</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    placeholder="Enter your location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="Tell us more about you"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Sign Up
                  </button>
                </div>

                <p className="text-center small">
                  Already have an account?{" "}
                  <a href="/login">Login here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
