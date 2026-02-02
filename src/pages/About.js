import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
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
          <p className="lead-pg">
            n'Bazaar360 is a digital cultural initiative developed within the
            Web Challenge program,<br/> supported by the Municipality of Tirana.
            The platform reimagines Pazari i Ri,<br/> one of Tirana's most iconic
            public spaces, through immersive 360° virtual tours and<br/>
            augmented reality (AR) experiences, connecting tradition with
            modern technology.
          </p>

          <p className="lead-pg">
            Designed as a next-generation cultural platform, n'Bazaar360 allows locals and<br/>
            international visitors to explore the market beyond physical presence—discovering<br/>
            its stories, artisans, products, and everyday life anytime, from anywhere.<br/>
            By blending digital storytelling with spatial technology, the project transforms<br/>
            Pazari i Ri into a living digital archive and a flagship example of<br/>
            Tirana Smart City.
          </p>

          {/* Vision */}
          <h3 className="mt-5 fw-semibold">Our Vision</h3>
          <p>
            To position Tirana as a forward-thinking and culturally rich city by digitally
            preserving and promoting its urban heritage, enhancing tourism experiences, and
            empowering local artisans through innovative technology.
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

          {/* Impact */}
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

          {/* Looking Ahead */}
          <h3 className="mt-5 fw-semibold">Looking Ahead</h3>
          <p>
            Built as a scalable digital ecosystem, n'Bazaar360 is designed to expand across
            multiple cultural zones, support multilingual audiences, and evolve with emerging
            technologies such as advanced augmented reality and virtual reality—shaping the
            future of how cities tell their stories.
          </p>

        </div>
      </section>
    </>
  );
};

export default About;
