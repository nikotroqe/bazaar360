import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
/* ========================
   FEATURED DATA
======================== */
const featuredBusinesses = [
  {
    name: "Pazari i Ri",
    description:
      "Pazari i Ri is the historic heart of Tirana, where tradition, gastronomy, and culture come together in a vibrant and modern marketplace experience.",
    image: "https://pazariiri.al/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-17-at-16.38.25.jpeg",
    logo: "https://pazariiri.al/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-17-at-16.38.25.jpeg"
  },
  {
    name: "Manna-Mediterranean Food",
    description:
      "Manna-Mediterranean Food is a modern restaurant offering fresh Mediterranean flavors crafted with quality ingredients and creative culinary techniques.",
    image: "https://www.pesyje.com/images/businesses/mannaal-1759404974.webp",
    logo: "https://www.pesyje.com/images/businesses/mannaal-1759404974.webp"
  },
  {
    name: "Zagara Al' Bazaar",
    description:
      "Zagara Al' Bazaar is a traditional grill restaurant serving authentic Albanian specialties in a vibrant and contemporary atmosphere.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreoaO3o7D4zeq6Xgtk7G1pH9P9omyKWQwFg&s",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreoaO3o7D4zeq6Xgtk7G1pH9P9omyKWQwFg&s"
  },
  {
    name: "Mulliri i Vjeter",
    description:
      "Mulliri i Vjeter is a well-known Albanian coffeehouse offering authentic coffee blends and a warm atmosphere for relaxing moments throughout the day.",
    image: "https://mullirivjeter.al/wp-content/uploads/2017/11/Logo-Mulliri-Large.png",
    logo: "https://mullirivjeter.al/wp-content/uploads/2017/11/Logo-Mulliri-Large.png"
  },
  {
    name: "Old Bazaar",
    description:
      "Old Bazaar is a lively destination that blends local flavors with a modern setting, creating a dynamic and welcoming experience in the heart of the city.",
    image: "https://njoftimeperpune.com/storage/uploads/2023/Sep/3/2023093_1693765369C2862748-3923-4423-BC7D-657C81364165.jpeg",
    logo: "https://njoftimeperpune.com/storage/uploads/2023/Sep/3/2023093_1693765369C2862748-3923-4423-BC7D-657C81364165.jpeg"
  },
  {
    name: "Oda Restaurant",
    description:
      "Oda Restaurant is a traditional Albanian dining spot known for its authentic cuisine, cozy atmosphere, and preserved cultural heritage.",
    image: "https://odarestaurant.al/wp-content/uploads/2025/10/cropped-Senza-titolo-500-x-250-px.png",
    logo: "https://odarestaurant.al/wp-content/uploads/2025/10/cropped-Senza-titolo-500-x-250-px.png"
  }
];


const Home = () => {

  /* ========================
     SLIDER LOGIC
  ======================== */

  const itemsPerView = 4;
  const [startIndex, setStartIndex] = useState(0);

  const totalSlides = Math.max(
    featuredBusinesses.length - itemsPerView + 1,
    1
  );

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <header className="hero-section text-center text-white">
        <div className="container hero-content">
          
          <div className="hero-badge mb-4">
            <span className="dot"></span>
            Digital Cultural Experience
          </div>

          <div className="hero-title">
            Pazari i Ri <br />
            <span>Reimagined</span>
          </div>

          <p className="hero-subtitle mt-4">
            Experience Tirana's historic New Bazaar through immersive 360° tours,
            augmented reality stories, and interactive cultural exploration.
          </p>

          <div className="hero-buttons mt-5">
            <Link to="/tour360" className="btn-primary-custom me-3">
              Start Exploring →
            </Link>
            <Link to="/ar_stories" className="btn-secondary-custom">
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
      <section className="events-section py-5">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 className="featured-title">Upcoming Events</h2>
        <p className="featured-subtitle">
          Connect with the community and grow your network at these upcoming events.
        </p>
      </div>
      <div>
        <Link to="/events" className="btn btn-outline-primary">
          View all events →
        </Link>
      </div>
    </div>

    {/* Nëse nuk ka evente për momentin */}
    <div className="no-events-box p-5 text-center">
      <h5>No upcoming events at the moment.</h5>
      <p>Check back soon for new events!</p>
    </div>
  </div>
</section>
      {/* FEATURED */}
      <section className="featured-section py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="featured-title">Featured Businesses</h2>
            <p className="featured-subtitle">
              Discover innovative businesses shaping the spirit of Pazari i Ri.
            </p>
          </div>

          <div className="slider-wrapper">
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${startIndex * (100 / itemsPerView)}%)`
              }}
            >
              {featuredBusinesses.map((business, index) => (
                <div key={index} className="slider-item">
                  <div className="startup-card">

                    <div className="startup-image">
                      <img src={business.image} alt={business.name} />

                      <div className="startup-overlay">
                        <div className="startup-logo">
                          <img src={business.logo} alt="logo" />
                        </div>
                        <h5 className="startup-title">{business.name}</h5>
                      </div>
                    </div>

                    <div className="startup-body">
                      <p>{business.description}</p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="dots text-center mt-4">
            {[...Array(totalSlides)].map((_, index) => (
              <span
                key={index}
                className={`dot ${index === startIndex ? "active-dot" : ""}`}
                onClick={() => setStartIndex(index)}
              ></span>
            ))}
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