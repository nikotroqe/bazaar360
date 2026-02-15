import React, { useState, useRef } from "react"; 
import "./Tour360.css";

const Tour360 = () => {
  const [activeLocation, setActiveLocation] = useState("Main Square");
  const [zoomLevel, setZoomLevel] = useState(1);
  const viewerRef = useRef(null);

  const hotspots = [
    { title: "Main Square", top: "35%", left: "55%" },
    { title: "Artisan Shop", top: "65%", left: "30%" },
  ];

  const locations = [
    { title: "Main Square", points: 12, img: "https://images.unsplash.com/photo-1728733287961-570ecea608bf?q=80&w=1400" },
    { title: "Artisan Corner", points: 8, img: "https://images.unsplash.com/photo-1762999851391-9113591f49ed?q=80&w=1400" },
    { title: "Central Plaza", points: 15, img: "https://images.unsplash.com/photo-1719861033127-00b5346c4215?q=80&w=1400" },
  ];

  const handleHotspotClick = (title) => {
    alert(title);
  };

  const handleLocationClick = (title) => {
    setActiveLocation(title);
    setZoomLevel(1); // reset zoom kur ndryshon location
  };

  // Funksionet e zoom dhe fullscreen
  const zoomIn = () => {
    if (zoomLevel < 3) setZoomLevel(prev => prev + 0.2);
  };

  const zoomOut = () => {
    if (zoomLevel > 1) setZoomLevel(prev => prev - 0.2);
  };

  const resetZoom = () => setZoomLevel(1);

  const toggleFullscreen = () => {
    if (viewerRef.current) {
      if (!document.fullscreenElement) {
        viewerRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  const activeLocationObj = locations.find(loc => loc.title === activeLocation);

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
            
            {/* 360 VIEW + IMAGE */}
            <div className="col-lg-8">
              <div className="viewer-box position-relative" ref={viewerRef}>
                <img src={activeLocationObj.img} alt={activeLocationObj.title} className="img-fluid" style={{ transform: `scale(${zoomLevel})` }}
                />

                {/* HOTSPOTS */}
                {hotspots.map((hotspot, idx) => (
                  <span
                    key={idx}
                    className="hotspot"
                    style={{ top: hotspot.top, left: hotspot.left }}
                    onClick={() => handleHotspotClick(hotspot.title)}
                  ></span>
                ))}

                {/* LABEL */}
                <div className="location-label">{activeLocationObj.title}</div>

                {/* CONTROLS */}
                <div className="viewer-controls">
                  <button onClick={zoomIn} title="Zoom In">+</button>
                  <button onClick={zoomOut} title="Zoom Out">-</button>
                  <button onClick={resetZoom} title="Reset">⟳</button>
                  <button onClick={toggleFullscreen} title="Fullscreen">⛶</button>
                </div>
              </div>
            </div>

            {/* SIDEBAR RIGHT */}
            <div className="col-lg-4">
              <h4 className="fw-bold mb-4">Locations</h4>
              {locations.map((loc, idx) => (
                <div
                  key={idx}
                  className={`location-card ${activeLocation === loc.title ? "active" : ""}`}
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
