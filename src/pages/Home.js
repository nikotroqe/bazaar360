import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <header className="hero-section text-center text-white">
        <div className="container">
          <span className="badge bg-warning text-dark mb-3">
            Digital Cultural Experience
          </span>
          <h1 className="display-4 fw-bold mt-3">
            Pazari i Ri <span className="text-warning">Reimagined</span>
          </h1>
          <p className="lead mt-4">
            Experience Tirana's historic New Bazaar through immersive 360° tours,
            augmented reality stories, and interactive cultural exploration.
          </p>

          <div className="mt-5">
            <Link to="/tour360" className="btn btn-danger btn-lg me-3">
              Start Exploring
            </Link>
            <Link to="/ar_stories" className="btn btn-outline-light btn-lg">
              View AR Stories
            </Link>
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Explore the Bazaar</h2>
            <p className="text-muted">
              Discover Albanian heritage through cutting-edge technology
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-6">
              <div className="feature-box">
                <img
                  src="https://images.unsplash.com/photo-1648501910342-5332f255c12b?q=80&w=1200"
                  alt="360 Tours"
                  className="img-fluid"
                />
                <div className="feature-content">
                  <h5>360° Virtual Tours</h5>
                  <p>
                    Immerse yourself in the vibrant atmosphere of Pazari i Ri from anywhere in the world.
                  </p>
                  <Link to="/tour360" className="feature-link">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6">
              <div className="feature-box">
                <img
                  src="https://images.unsplash.com/photo-1687294088443-f207b36b0469?q=80&w=1200"
                  alt="AR Stories"
                  className="img-fluid"
                />
                <div className="feature-content">
                  <h5>AR Artisan Stories</h5>
                  <p>
                    Experience the personal narratives of local artisans through augmented reality.
                  </p>
                  <Link to="/ar_stories" className="feature-link">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6">
              <div className="feature-box">
                <img
                  src="https://images.unsplash.com/photo-1580052040395-32c97dcb60de?q=80&w=1200"
                  alt="Events"
                  className="img-fluid"
                />
                <div className="feature-content">
                  <h5>Cultural Events</h5>
                  <p>
                    Stay updated with festivals, workshops, and special bazaar events.
                  </p>
                  <Link to="/events" className="feature-link">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-6">
              <div className="feature-box">
                <img
                  src="https://images.unsplash.com/photo-1623851277328-fca6cd2b8eec?q=80&w=1200"
                  alt="Map"
                  className="img-fluid"
                />
                <div className="feature-content">
                  <h5>Interactive Map</h5>
                  <p>
                    Navigate the bazaar with our detailed map of shops, cafés, and landmarks.
                  </p>
                  <Link to="/map" className="feature-link">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section text-center text-white">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3">
              <h2>50+</h2>
              <p>Artisan Stories</p>
            </div>
            <div className="col-6 col-md-3">
              <h2>100+</h2>
              <p>360° Locations</p>
            </div>
            <div className="col-6 col-md-3">
              <h2>200+</h2>
              <p>Historic Photos</p>
            </div>
            <div className="col-6 col-md-3">
              <h2>75</h2>
              <p>Years of History</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Preserve Cultural Heritage</h2>
          <p className="mb-4">
            Help us document and promote the stories and traditions of Pazari i Ri.
          </p>
          <button className="btn btn-warning btn-lg">Share Your Story</button>
        </div>
      </section>
    </div>
  );
};

export default Home;