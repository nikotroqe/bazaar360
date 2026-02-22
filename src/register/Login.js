import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder login logic
    console.log("Login data:", { email, password });

    // reset (opsionale)
    setEmail("");
    setPassword("");
  };

  return (
    <section className="login-section d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow p-4">
              <h3 className="text-center fw-bold mb-4">
                Login to Your Account
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Login
                  </button>
                </div>

                <p className="text-center small">
                  Don't have an account?{" "}
                  <a href="/sign_up">Sign up here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
