import React, { useState } from "react";
import "./ARStories.css";

const ARStories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArtisan, setSelectedArtisan] = useState(null);

  const artisans = [
    {
      name: "Agim Gjini",
      role: "Coppersmith",
      desc: "Three generations of metalwork craftsmanship passed down through the Gjini family.",
      img: "https://images.unsplash.com/photo-1631561380958-350615845e64",
      videoTime: "4:30",
      qrLink: "https://bazaar360.al/ar/agim",
      views: 2543,
    },
    {
      name: "Elvira Hoxha",
      role: "Ceramic Artist",
      desc: "Traditional Albanian pottery techniques kept alive through passion and dedication.",
      img: "https://pine.al/uploads/images/2023/10/26/653a9a1d952c5-Pazari-i-ri-Tirane-atelier4-studio_06.png",
      videoTime: "5:15",
      qrLink: "https://bazaar360.al/ar/elvira",
      views: 3102,
    },
    {
      name: "Fatmir Shehu",
      role: "Textile Weaver",
      desc: "Handwoven textiles showcasing ancient Albanian patterns and modern creativity.",
      img: "https://tirana.al/uploads/images/points-of-interes/20190704141707_pazari-i-ri-2.jpg",
      videoTime: "3:45",
      qrLink: "https://bazaar360.al/ar/fatmir",
      views: 1876,
    },
    {
      name: "Mirela Dervishi",
      role: "Jewelry Designer",
      desc: "Contemporary designs inspired by traditional Albanian cultural motifs.",
      img: "https://pikark.com/wp-content/uploads/listing-uploads/gallery/2020/12/Pazari-i-ri-Tirane-atelier4-studio_03.png",
      videoTime: "6:00",
      qrLink: "https://bazaar360.al/ar/mirela",
      views: 4221,
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Scan QR Code",
      desc: "Find QR codes at each artisan location throughout the bazaar",
    },
    {
      number: 2,
      title: "Point Your Phone",
      desc: "Aim your camera at the designated spot to activate the AR experience",
    },
    {
      number: 3,
      title: "Experience Story",
      desc: "Watch artisans share their craft, techniques, and cultural heritage",
    },
  ];

  const openModal = (artisan) => {
    setSelectedArtisan(artisan);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedArtisan(null);
    setModalOpen(false);
  };

  return (
    <>
      {/* HERO */}
      <header className="ar-hero d-flex align-items-center">
        <div className="container ar-badge text-white">
          <div className="hero-badge mb-4">
            <span className="bi bi-phone"></span>
            Augmented Reality Experience
          </div>
          <h1 className="display-5 fw-bold">Artisan Stories</h1>
          <p className="lead">
            Experience the lives and crafts of Pazari i Ri's master artisans through immersive AR storytelling.
          </p>
        </div>
      </header>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <div className="container text-center">
          <h2 className="mb-3">How It Works</h2>
          <p className="text-muted mb-5">
            Use your smartphone to unlock AR experiences at each artisan's stall
          </p>
          <div className="row justify-content-center">
            {steps.map((step) => (
              <div className="col-md-4 mb-4" key={step.number}>
                <div className="how-number">{step.number}</div>
                <h5>{step.title}</h5>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTISANS */}
      <section className="featured-artisans">
        <div className="container">
          <h2 className="mb-5">Featured Artisans</h2>
          <div className="row g-4">
            {artisans.map((artisan, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="artisan-card position-relative">
                  <div className="artisan-img position-relative">
                    <img src={artisan.img} alt={artisan.name} className="w-100" />
                    <span className="video-time">{artisan.videoTime}</span>
                    <button
                      className="play-btn position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center bg-white border-0 rounded-circle"
                      onClick={() => openModal(artisan)}
                      aria-label={`Play video of ${artisan.name}`}
                    >
                      <img src="https://www.freepnglogos.com/uploads/play-button-png/play-button-icon-icons-download-17.png" alt="Play Icon" width="24" height="24"/>
                    </button>
                  </div>
                  <div className="artisan-body">
                    <h5>{artisan.name}</h5>
                    <span className="role">{artisan.role}</span>
                    <p>{artisan.desc}</p>
                    <div className="meta">{artisan.views.toLocaleString()} views · Save · Share</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modalOpen && selectedArtisan && (
        <div className="modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">AR Experience Preview - {selectedArtisan.name}</h5>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="qr-frame">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${selectedArtisan.qrLink}`}
                  alt="Scan QR Code"
                />
              </div>
              <p className="text-muted">
                Scan the QR code with your smartphone to unlock the full AR experience at the bazaar.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ARStories;
