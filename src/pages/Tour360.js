import React, { useState } from "react";
import "./Tour360.css";

const Tour360 = () => {
  const [activeLocation, setActiveLocation] = useState("Main Square");

  const hotspots = [
    { title: "Main Square", top: "35%", left: "55%" },
    { title: "Artisan Shop", top: "65%", left: "30%" },
  ];

  const locations = [
    { title: "Main Square", points: 12 },
    { title: "Artisan Corner", points: 8 },
    { title: "Central Plaza", points: 15 },
  ];

  const handleHotspotClick = (title) => {
    alert(title);
  };

  const handleLocationClick = (title) => {
    setActiveLocation(title);
  };

  return (
    <>
      {/* HERO */}
      <header className="tour-hero text-white">
        <div className="container">
          <h1 className="display-5 fw-bold">360° Virtual Exploration</h1>
          <p className="lead text-light mt-3">
            Navigate through immersive panoramic views of Pazari i Ri. <br />
            Click and drag to explore every corner of this historic marketplace.
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            {/* 360 VIEW */}
            <div className="col-lg-8">
              <div className="viewer-box">
                <img
                  src="https://images.unsplash.com/photo-1728733287961-570ecea608bf?q=80&w=1400"
                  alt="Pazari i Ri"
                  className="img-fluid"
                />

                {/* HOTSPOTS */}
                {hotspots.map((hotspot, idx) => (
                  <span
                    key={idx}
                    className="hotspot"
                    style={{ top: hotspot.top, left: hotspot.left }}
                    data-title={hotspot.title}
                    onClick={() => handleHotspotClick(hotspot.title)}
                  ></span>
                ))}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4">
              <h4 className="fw-bold mb-4">Locations</h4>

              {locations.map((loc, idx) => (
                <div
                  key={idx}
                  className={`location-card ${
                    activeLocation === loc.title ? "active" : ""
                  }`}
                  onClick={() => handleLocationClick(loc.title)}
                >
                  <h6>{loc.title}</h6>
                  <small>{loc.points} interactive points</small>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Tour360;
