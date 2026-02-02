import { useState } from "react";
import "./Map.css";

const LOCATIONS = [
  {
    name: "Traditional Pottery Shop",
    category: "Shops",
    desc: "Authentic Albanian ceramics and pottery",
    hours: "9:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261",
    icon: "🏺",
    type: "shop",
    top: "25%",
    left: "30%",
  },
  {
    name: "Café Pazari",
    category: "Cafes",
    desc: "Local coffee in the heart of Pazari",
    hours: "7:00 AM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    icon: "☕",
    type: "cafe",
    top: "37%",
    left: "38%",
  },
  {
    name: "Artisan Textile Market",
    category: "Markets",
    desc: "Handmade textiles and crafts",
    hours: "8:00 AM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d",
    icon: "🛍️",
    type: "market",
    top: "49%",
    left: "46%",
  },
  {
    name: "Restaurant Tradicionale",
    category: "Restaurants",
    desc: "Traditional Albanian cuisine",
    hours: "11:00 AM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    icon: "🍽️",
    type: "restaurant",
    top: "61%",
    left: "54%",
  },
  {
    name: "Copper Workshop",
    category: "Shops",
    desc: "Handcrafted copper souvenirs",
    hours: "9:00 AM - 6:00 PM",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    icon: "⚒️",
    type: "shop",
    top: "73%",
    left: "62%",
  },
  {
    name: "Morning Brew Café",
    category: "Cafes",
    desc: "Fresh coffee every morning",
    hours: "7:00 AM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    icon: "☕",
    type: "cafe",
    top: "85%",
    left: "70%",
  },
];

export default function Map() {
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");
  const [zoom, setZoom] = useState(1);

  const filtered = LOCATIONS.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* HERO */}
      <header className="map-hero text-white text-center">
        <div className="container">
          <h1 className="fw-bold">Interactive Bazaar Map</h1>
          <p className="lead">Find shops, cafés and landmarks at Pazari i Ri</p>
        </div>
      </header>

      {/* MAP SECTION */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">

            {/* MAP */}
            <div className="col-lg-8">

              {/* SEARCH */}
              <div className="mb-3 position-relative">
                <input
                  className="form-control ps-5"
                  placeholder="Search locations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <span className="search-icon">🔍</span>
              </div>

              <div className="map-container">
                <img
                  src="https://images.unsplash.com/photo-1759802524049-2421ddaee0fe"
                  alt="Map"
                  style={{ transform: `scale(${zoom})` }}
                />

                {filtered.map((l) => (
                  <button
                    key={l.name}
                    className={`map-marker ${l.type} ${active?.name === l.name ? "active" : ""}`}
                    style={{ top: l.top, left: l.left }}
                    onClick={() => setActive(l)}
                  >
                    {l.icon}
                  </button>
                ))}

                <div className="map-controls">
                  <button onClick={() => setZoom(Math.min(2, zoom + 0.1))}>+</button>
                  <button onClick={() => setZoom(Math.max(1, zoom - 0.1))}>−</button>
                </div>
              </div>

              {/* INFO PANEL */}
              {active && (
                <div className="location-panel mt-4">
                  <button className="panel-close" onClick={() => setActive(null)}>×</button>
                  <div className="panel-content d-flex gap-3">
                    <img src={active.image} alt={active.name} />
                    <div>
                      <h5>{active.name}</h5>
                      <span>{active.category}</span>
                      <p>{active.desc}</p>
                      <p><strong>Hours:</strong> {active.hours}</p>
                      <button className="btn btn-dark btn-sm">Get Directions</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4">
              <div className="sidebar-box">
                <h5 className="fw-bold mb-3">All Locations</h5>
                <ul className="location-list">
                  {filtered.map((l) => (
                    <li
                      key={l.name}
                      className={`location-item ${active?.name === l.name ? "active" : ""}`}
                      onClick={() => setActive(l)}
                    >
                      {l.icon} {l.name} <small>{l.category}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
