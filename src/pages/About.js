import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [loading, setLoading] = useState(true); // spinner fillestar

  useEffect(() => {
    // Kur komponenti mount-et, shfaq spinner për 0.3s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // 0.3 sekonda, mund ta rrisësh në 500ms nëse do më smooth

    return () => clearTimeout(timer);
  }, []); // [] = ekzekutohet vetëm një herë kur mount-et komponenti

  return (
    <>
    {/* LOADING OVERLAY */}
      {loading && (
        <div className="page-loading">
          <div className="spinner"></div>
        </div>
      )}
      {/* PAGE HEADER */}
      <header className="bg-dark text-white">
        <div className="container">
          <h1 className="fw-bold">About</h1>
          <p className="lead mt-3">
            Experience culture through immersive digital exploration.
          </p>
        </div>
      </header>

      {/* ABOUT CONTENT */}
      <section className="title py-5">
        <div className="container">

          {/* Intro */}
          
          <div className="about-flex">
            <div className="about-text">
               <p>
                Bazaar360 is an innovative digital initiative that brings Pazari i Ri in Tirana into the virtual realm.
                This platform allows citizens and tourists to explore this iconic market from anywhere and at any time.
                We also aim to promote authentic products from local artisans, farmers, and small businesses, with a special focus on international visitors.
              </p>

              <p>
                By using immersive 360° tours and augmented reality, we reimagine the market experience, offering a digital window into its vibrant culture.
                Each store and artisan is equipped with a unique QR code that visitors can scan to access business profiles, additional information, and even augmented product demonstrations.
              </p>
            </div>

            <div className="about-image">
              <img
                src="https://itinari-images.s3.eu-west-1.amazonaws.com/activity/images/original/c93930d4-a4ec-4a3b-ba0f-95538ddf63fd-istock-925240908.jpg"
                alt="Pazari i Ri Tirana"
              />
            </div>
          </div>
          
          {/* Mission */}
          <h3 className="mt-5 fw-semibold">Our Mission</h3>
          <p>
            Our mission is to digitally transform the iconic Pazari i Ri in Tirana by providing both locals and tourists with the opportunity to explore its vibrant culture through immersive 360° experiences.
            We aim to promote authentic products from local artisans, farmers, and small enterprises, with a special focus on attracting foreign tourists. Through innovative technology and virtual reality, we bring the market closer to people, anytime and anywhere.
          </p>

          {/* Vision */}
          <h3 className="mt-5 fw-semibold">Our Vision</h3>
          <p>
            Our vision is to become a leading digital platform that connects people with Tirana’s rich cultural heritage. By integrating augmented reality and virtual tours, we enhance the way visitors interact with local businesses, artisans, and traditions.
            We strive to create an engaging and accessible space that allows users to experience the beauty and craftsmanship of Tirana’s Bazaar from anywhere in the world, all while supporting the local economy and preserving cultural heritage.
          </p>

          {/* Objectives */}
          <h3 className="mt-5 fw-semibold">Our Objectives</h3>
          <p>
            Our objective is to provide a seamless digital experience that connects visitors with the heart of Pazari i Ri. Each shop and artisan will feature unique QR codes, allowing visitors to access digital profiles, product demonstrations, videos, and additional information through augmented reality.
            We aim to empower local businesses by enhancing their visibility and fostering direct connections with international audiences, all while promoting sustainable tourism and cultural engagement.
          </p>

          {/* What We Offer */}
          <h3 className="mt-5 fw-semibold">What We Offer</h3>
          <div className="row mt-4 g-4">

            <div className="col-md-6 col-lg-3">
              <div className="offer-card">
                <h5 className="fw-semibold">Immersive 360° Market Experience</h5>
                <p>
                  Explore Pazari i Ri through the first fully immersive virtual tour, capturing
                  the atmosphere, architecture, and rhythm of daily life.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="offer-card">
                <h5 className="fw-semibold">Augmented Reality Cultural Stories</h5>
                <p>
                  Scan QR codes on-site to unlock AR content—videos, stories, and animations that
                  connect visitors with artisans and traditions.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="offer-card">
                <h5 className="fw-semibold">Digital Profiles for Local Businesses</h5>
                <p>
                  Artisans and vendors gain digital visibility through dedicated profiles,
                  expanding reach and supporting the local economy.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="offer-card">
                <h5 className="fw-semibold">Smart Tourism & Cultural Engagement</h5>
                <p>
                  A blended physical and digital visitor journey that makes culture more
                  interactive, accessible, and engaging.
                </p>
              </div>
            </div>

          </div>

          {/* Impact 
          <h3 className="mt-5 fw-semibold">Cultural & Community Impact</h3>
          <p>
            n’Bazaar360 strengthens Tirana's cultural identity by documenting crafts,
            traditions, and personal stories that risk being lost over time.
            The platform provides the Municipality of Tirana with a scalable and replicable
            digital model, adaptable to other historic and cultural areas of the city.
          </p>

          <p>
            By integrating technology into a historic urban space, n'Bazaar360 contributes
            to sustainable tourism, community engagement, and the long-term preservation of
            Tirana’s cultural heritage.
          </p>

          Looking Ahead
          <h3 className="mt-5 fw-semibold">Looking Ahead</h3>
          <p>
            Built as a scalable digital ecosystem, n'Bazaar360 is designed to expand across
            multiple cultural zones, support multilingual audiences, and evolve with emerging
            technologies such as advanced augmented reality and virtual reality—shaping the
            future of how cities tell their stories.
          </p>*/}

        </div>
      </section>
    </>
  );
};

export default About;
