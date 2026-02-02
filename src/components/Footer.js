import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">

      {/* Main footer content */}
      <div className="container py-5">
        <div className="row g-4">

          {/* Brand / About */}
          <div className="col-md-6 col-lg-3 px-3">
            <h5 className="fw-semibold">Bazaar360</h5>
            <p className="small mt-2">
              A digital journey through Tirana's beloved Pazari i Ri,
              preserving cultural heritage through immersive technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-3 px-3">
            <h5 className="fw-semibold">Quick Links</h5>
            <ul className="list-unstyled small mt-2">
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/tour360" className="text-light text-decoration-none">
                  360° Exploration
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/ar_stories" className="text-light text-decoration-none">
                  AR Stories
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/events" className="text-light text-decoration-none">
                  Events
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/map" className="text-light text-decoration-none">
                  Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-6 col-lg-3 px-3">
            <h5 className="fw-semibold">About</h5>
            <ul className="list-unstyled small mt-2">
              <li className="mb-2">
                <Link to="/ar-stories" className="text-light text-decoration-none">
                  Our Mission
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/map" className="text-light text-decoration-none">
                  Cultural Heritage
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/archive" className="text-light text-decoration-none">
                  Partner with Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/archive" className="text-light text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-md-6 col-lg-3 px-3">
            <h5 className="fw-semibold">Connect</h5>

            <div className="d-flex gap-3 mt-2 footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter-x"></i>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>

            <p className="small mt-4 mb-0">
              Municipality of Tirana
              <br />
              Pazari i Ri, Tirana, Albania
            </p>
          </div>

        </div>
      </div>

      {/* Bottom FULL WIDTH */}
      <div className="footer-bottom">
            <div className="container footer-bottom-content text-center small">
                <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                <p className="mb-0">
                    © 2026 Bazaar360 | All rights reserved.
                </p>
                <p className="mb-0">
                    An initiative by the Web Challenge & Municipality of Tirana.
                </p>
                </div>
            </div>
        </div>


    </footer>
  );
};

export default Footer;

