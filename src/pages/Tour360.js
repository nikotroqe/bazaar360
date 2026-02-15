import React, { useState, useRef } from "react"; 
import "./Tour360.css";

const Tour360 = () => {
  const [activeLocation, setActiveLocation] = useState("Main Square");
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const viewerRef = useRef(null);

  const hotspots = [
    { title: "Main Square", top: "35%", left: "55%" },
    { title: "Artisan Shop", top: "65%", left: "30%" },
  ];

  const locations = [
    { 
      title: "Main Square", 
      points: 12, 
      img: "https://images.unsplash.com/photo-1728733287961-570ecea608bf?q=80&w=1400",
      description: "The vibrant heart of Pazari i Ri, where local vendors showcase fresh produce and traditional goods."
    },
    { 
      title: "Artisan Corner", 
      points: 8, 
      img: "https://images.unsplash.com/photo-1762999851391-9113591f49ed?q=80&w=1400",
      description: "Discover handcrafted goods and traditional Albanian artisanship in this cozy market section."
    },
    { 
      title: "Central Plaza", 
      points: 15, 
      img: "https://images.unsplash.com/photo-1719861033127-00b5346c4215?q=80&w=1400",
      description: "A bustling meeting point surrounded by cafes, restaurants, and cultural landmarks."
    },
  ];

  const handleHotspotClick = (title) => alert(title);

  const handleLocationClick = (title) => {
    setActiveLocation(title);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  // Drag functions: lejo drag vetem kur zoom > 1
  const handleMouseDown = (e) => {
    if (zoomLevel <= 1) return;
    setDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!dragging || zoomLevel <= 1) return;
    let newX = e.clientX - startPos.x;
    let newY = e.clientY - startPos.y;

    if (viewerRef.current) {
      const vw = viewerRef.current.offsetWidth;
      const vh = viewerRef.current.offsetHeight;
      const maxX = ((zoomLevel - 1) * vw) / 2;
      const maxY = ((zoomLevel - 1) * vh) / 2;

      if (newX > maxX) newX = maxX;
      if (newX < -maxX) newX = -maxX;
      if (newY > maxY) newY = maxY;
      if (newY < -maxY) newY = -maxY;
    }

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => setDragging(false);
  const handleMouseLeave = () => setDragging(false);

  // Zoom & fullscreen
  const zoomIn = () => { if (zoomLevel < 3) setZoomLevel(prev => prev + 0.2); }
  const zoomOut = () => { if (zoomLevel > 1) setZoomLevel(prev => prev - 0.2); }
  const resetZoom = () => { setZoomLevel(1); setPosition({ x: 0, y: 0 }); }
  const toggleFullscreen = () => {
    if (viewerRef.current) {
      if (!document.fullscreenElement) viewerRef.current.requestFullscreen();
      else document.exitFullscreen();
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
            {/* 360 VIEW */}
            <div className="col-lg-8">
              <div
                className="viewer-box position-relative"
                ref={viewerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: dragging ? "grabbing" : zoomLevel > 1 ? "grab" : "default" }}
              >
                <img
                  src={activeLocationObj.img}
                  alt={activeLocationObj.title}
                  className="img-fluid"
                  draggable={false}
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
                    transition: dragging ? "none" : "transform 0.2s",
                  }}
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
                  <button onClick={zoomIn}>+</button>
                  <button onClick={zoomOut}>-</button>
                  <button onClick={resetZoom}>⟳</button>
                  <button onClick={toggleFullscreen}>⛶</button>
                </div>
              </div>

              {/* DESCRIPTION JASHTE IMAZHIT */}
              <div className="location-description">{activeLocationObj.description}</div>
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

              {/* NAVIGATION TIPS */}
              <div className="navigation-tips mt-4 p-3 bg-dark text-white rounded">
                <h6>Navigation Tips</h6>
                <ul>
                  <li>Drag to rotate the 360° view</li>
                  <li>Click golden markers for details</li>
                  <li>Use zoom controls for closer look</li>
                  <li>Switch locations from the sidebar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tour360;
