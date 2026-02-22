import React, { useState } from "react";
import "./Admin.css";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="admin-page">

      {/* HEADER */}
      <header className="dashboard-hero border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <h1 className="fw-bold mb-1">Admin Dashboard</h1>
            <p className="mb-0">
              Manage content, locations, and events for n'Bazaar360
            </p>
          </div>
          <button className="btn btn-danger px-4" id="btnAddNew">
            + Add New
          </button>
        </div>
      </header>

      {/* DASHBOARD CONTENT */}
      <section className="dashboard-content">
        <div className="container">

          {/* TABS */}
          <ul className="nav nav-pills mb-4" id="dashboardTabs">
            {[
              { id: "overview", label: "Overview" },
              { id: "ar-stories", label: "AR Stories" },
              { id: "locations", label: "Locations" },
              { id: "events", label: "Events" },
            ].map((tab) => (
              <li className="nav-item" key={tab.id}>
                <button
                    type="button"
                    className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                    onClick={() => handleTabClick(tab.id)}
                >
                    {tab.label}
                </button>
              </li>
            ))}
          </ul>

          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <div id="overview" className="tab-content active">
              {/* STATS */}
              <div className="stats-row">
                {[
                  { title: "Total Views", value: "45,231", change: "+12.5%", icon: "bi-eye" },
                  { title: "Active Stories", value: "28", change: "+3", icon: "bi-images" },
                  { title: "Locations", value: "45", change: "+5", icon: "bi-geo-alt" },
                  { title: "Events", value: "12", change: "+2", icon: "bi-calendar-event" },
                ].map((stat, idx) => (
                  <div className="stat-card card shadow-sm" key={idx}>
                    <div className="stat-header">
                      {/* Left: icon + text */}
                      <div className="stat-left">
                        <div className="stat-icon">
                          <i className={`bi ${stat.icon}`}></i>
                        </div>
                        <div className="stat-text">
                          <div className="stat-value">{stat.value}</div>
                          <div className="stat-title">{stat.title}</div>
                        </div>
                      </div>
                      {/* Right: change */}
                      <div className="stat-change text-success fw-semibold">{stat.change}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CONTENT: Recent Stories & Top Locations */}
              <div className="row g-4">
                {/* Recent Stories */}
                <div className="col-md-6">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="fw-bold mb-4">Recent Stories</h5>
                      {[
                        { title: "The Master Coppersmith", author: "Agim Gjini", status: "Published" },
                        { title: "Traditional Pottery", author: "Elvira Hoxha", status: "Published" },
                        { title: "Textile Heritage", author: "Fatmir Shehu", status: "Draft" },
                      ].map((story, idx) => (
                        <div className="list-item d-flex justify-content-between align-items-start" key={idx}>
                          <div className="story-info">
                            <strong className="story-title">{story.title}</strong>
                            <small className="story-author text-muted">
                              {story.author}
                            </small>
                          </div>

                          <span
                            className={`badge ${
                              story.status === "Published"
                                ? "status-published"
                                : "status-draft"
                            }`}
                          >
                            {story.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top Locations */}
                <div className="col-md-6">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="fw-bold mb-4">Top Locations</h5>

                      {[
                        { name: "Traditional Pottery Shop", type: "Shop", visits: 892 },
                        { name: "Café Pazari", type: "Café", visits: 1205 },
                        { name: "Artisan Textile Market", type: "Market", visits: 654 },
                      ].map((loc, idx) => (
                        <div className="list-item d-flex justify-content-between align-items-start" key={idx}>
                          {/* LEFT */}
                          <div className="location-info">
                            <strong className="location-name">{loc.name}</strong>
                            <small className="location-type text-muted">
                              {loc.type}
                            </small>
                          </div>

                          {/* RIGHT */}
                          <div className="location-visits">
                            <strong className="visits-number">
                              {loc.visits.toLocaleString()}
                            </strong>
                            <small className="visits-label text-muted">
                              visits
                            </small>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AR STORIES */}
          {activeTab === "ar-stories" && (
            <div id="ar-stories" className="tab-content active">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="fw-bold mb-0">AR Stories Management</div>
                    <button className="btn btn-dark px-4">+ Add Story</button>
                  </div>
                  <div className="table-responsive">
                    <table className="table align-middle table-hover">
                      <thead className="table-light">
                        <tr>
                          <th>Title</th>
                          <th>Artisan</th>
                          <th>Status</th>
                          <th>Views</th>
                          <th className="text-end">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { title: "The Master Coppersmith", artisan: "Agim Gjini", status: "Published", views: 2543 },
                          { title: "Traditional Pottery", artisan: "Elvira Hoxha", status: "Published", views: 3102 },
                          { title: "Textile Heritage", artisan: "Fatmir Shehu", status: "Draft", views: 0 },
                          { title: "Albanian Jewelry", artisan: "Mirela Dervishi", status: "Published", views: 4221 },
                        ].map((story, idx) => (
                          <tr key={idx}>
                            <td>{story.title}</td>
                            <td>{story.artisan}</td>
                            <td>
                              <span className={`status-${story.status.toLowerCase()}`}>
                                {story.status}
                              </span>
                            </td>
                            <td>{story.views.toLocaleString()}</td>
                            <td className="text-end action-icons">
                              <i className="bi bi-eye"></i>
                              <i className="bi bi-pencil"></i>
                              <i className="bi bi-trash"></i>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Locations */}
          {activeTab === "locations" && (
            <div id="locations" className="tab-content active">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="fw-bold mb-0">Location Management</div>
                    <button className="btn btn-dark px-4">+ Add Location</button>
                  </div>
                  <div className="table-responsive">
                    <table className="table align-middle table-hover">
                      <thead className="table-light">
                        <tr>
                          <th>Name</th>
                          <th>Category</th>
                          <th>Status</th>
                          <th>Visits</th>
                          <th className="text-end">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: "Traditional Pottery Shop", type: "Shop", status: "Verified", visits: 892 },
                          { name: "Café Pazari", type: "Café", status: "Verified", visits: 1205 },
                          { name: "Artisan Textile Market", type: "Market", status: "Pending", visits: 654 },
                          { name: "Restaurant Tradicionale", type: "Restaurant", status: "Pending", visits: 1876 },
                        ].map((loc, idx) => (
                          <tr key={idx}>
                            <td>{loc.name}</td>
                            <td>{loc.type}</td>
                            <td>
                              <span className={`status-${loc.status.toLowerCase()}`}>
                                {loc.status}
                              </span>
                            </td>
                            <td>{loc.visits}</td>
                            <td className="text-end action-icons">
                              <i className="bi bi-eye"></i>
                              <i className="bi bi-pencil"></i>
                              <i className="bi bi-trash"></i>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* EVENTS */}
          {activeTab === "events" && (
            <div id="events" className="tab-content active">
              <div className="container d-flex justify-content-center">
                <div className="card shadow-sm">
                  <div className="card-body text-center py-5">
                    <div className="calendar-icon mx-auto mb-3">
                      <i className="bi bi-calendar-event event-icon"></i>
                    </div>
                    <h3 className="mb-2">Events Management</h3>
                    <p className="text-muted mb-4">
                      Create and manage cultural events at Pazari i Ri
                    </p>
                    <button className="btn btn-dark px-4">+ Create Event</button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default Admin;