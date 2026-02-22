import React, { useState, useEffect } from "react";
import { FiCalendar, FiClock, FiMapPin, FiUsers } from "react-icons/fi";
import "./Events.css";

const eventsData = [
  {
    id: 1,
    category: "Festival",
    title: "Albanian Heritage Festival",
    date: new Date(2025, 9, 25),
    time: "10:00 AM - 6:00 PM",
    location: "Main Square, Pazari i Ri",
    attendees: 500,
    description:
      "Celebrate Albanian culture with traditional music, dance performances, and artisan demonstrations.",
    img: "https://pazariiri.al/wp-content/uploads/2025/02/Pazari-i-Ri-i-Tiranes-770x470-1.jpg",
  },
  {
    id: 2,
    category: "Workshop",
    title: "Artisan Workshop Series",
    date: new Date(2025, 9, 28),
    time: "2:00 PM - 5:00 PM",
    location: "Artisan Corner",
    attendees: 30,
    description:
      "Learn traditional crafts directly from master artisans. Limited spots available.",
    img: "https://thumbs.dreamstime.com/b/tirana-albania-pazari-i-ri-bazaar-together-neighbourhood-mujo-located-one-oldest-areas-tirana-329636772.jpg",
  },
  {
    id: 3,
    category: "Food",
    title: "Taste of Tirana Food Fair",
    date: new Date(2025, 10, 2),
    time: "12:00 PM - 8:00 PM",
    location: "Central Plaza",
    attendees: 800,
    description:
      "Sample authentic Albanian cuisine from the best vendors at Pazari i Ri.",
    img: "https://mindtrip.ai/attractions/0b45/94fe/13fb/4c38/fac8/c715/b547/2032",
  },
];

const categories = ["All Events", "Festival", "Workshop", "Food Events", "Markets"];

const Events = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [viewMode, setViewMode] = useState("list");
  const [loading, setLoading] = useState(true);

  const daysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const firstDayOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const handlePrevMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );

  const handleNextMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );

  const handleDayClick = (day) => {
    setSelectedDay(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    );
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setSelectedDay(null);
  };

  const renderDayCell = (day) => {
    const today = new Date();
    const isToday =
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear();

    const isSelected =
      selectedDay &&
      day === selectedDay.getDate() &&
      currentDate.getMonth() === selectedDay.getMonth() &&
      currentDate.getFullYear() === selectedDay.getFullYear();

    return (
      <td
        key={day}
        className={`${isToday ? "today" : ""} ${
          isSelected ? "active-day" : ""
        }`}
        onClick={() => handleDayClick(day)}
      >
        {day}
      </td>
    );
  };

  const renderCalendar = () => {
    const firstDay = firstDayOfMonth(currentDate);
    const days = daysInMonth(currentDate);
    const prevMonthDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();

    const rows = [];
    let dayCount = 1;

    const firstRow = [];
    for (let i = firstDay - 1; i >= 0; i--) {
      firstRow.push(
        <td key={"prev-" + i} className="muted">
          {prevMonthDays - i}
        </td>
      );
    }

    for (let i = firstDay; i < 7; i++) {
      firstRow.push(renderDayCell(dayCount++));
    }

    rows.push(<tr key="row-0">{firstRow}</tr>);

    let rowIndex = 1;
    while (dayCount <= days) {
      const row = [];
      for (let i = 0; i < 7 && dayCount <= days; i++) {
        row.push(renderDayCell(dayCount++));
      }
      rows.push(<tr key={"row-" + rowIndex}>{row}</tr>);
      rowIndex++;
    }

    return rows;
  };

  const filteredEvents = eventsData.filter((event) => {
    if (
      selectedCategory !== "All Events" &&
      event.category !== selectedCategory
    )
      return false;

    if (!selectedDay) return true;

    return (
      event.date.getDate() === selectedDay.getDate() &&
      event.date.getMonth() === selectedDay.getMonth() &&
      event.date.getFullYear() === selectedDay.getFullYear()
    );
  });

  useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 300);
    
        return () => clearTimeout(timer);
      }, []);
  

  return (
    <div>
      {/* LOADING OVERLAY */}
      {loading && (
        <div className="page-loading">
          <div className="spinner"></div>
        </div>
      )}
      <header className="events-hero">
        <div className="container">
          <h1 className="display-5">Cultural Events & Calendar</h1>
          <p className="lead mt-3">Stay connected with the vibrant community life at Pazari i Ri. From festivals to workshops, never miss a moment.</p>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            {/* SIDEBAR */}
            <aside className="aside-sidebar col-lg-3">
              <div className="sidebar-box mb-4">
                <h6 className="fw-bold mb-3">Select Date</h6>

                <div className="calendar-header d-flex align-items-center justify-content-between mb-2">
                  <button onClick={handlePrevMonth} className="calendar-nav-btn">
                    &lsaquo;
                  </button>

                  <strong className="calendar-current">
                    {currentDate.toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </strong>

                  <button onClick={handleNextMonth} className="calendar-nav-btn">
                    &rsaquo;
                  </button>
                </div>

                <table className="calendar-table">
                  <thead>
                    <tr>
                      <th>Su</th>
                      <th>Mo</th>
                      <th>Tu</th>
                      <th>We</th>
                      <th>Th</th>
                      <th>Fr</th>
                      <th>Sa</th>
                    </tr>
                  </thead>
                  <tbody>{renderCalendar()}</tbody>
                </table>
              </div>

              <div className="sidebar-box">
                <h6 className="fw-bold mb-3">Categories</h6>
                <ul className="category-list">
                  {categories.map((cat, idx) => (
                    <li
                      key={idx}
                      className={
                        selectedCategory === cat ? "active-category" : ""
                      }
                      onClick={() => handleCategoryClick(cat)}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* EVENTS */}
            <main className="main-side col-lg-9">

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0">Upcoming Events</h3>

                <div className="view-toggle-buttons d-flex gap-2">
                  <button
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "btn btn-dark btn-sm" : "btn btn-outline-dark btn-sm"}
                  >
                    List View
                  </button>

                  <button
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "btn btn-dark btn-sm" : "btn btn-outline-dark btn-sm"}
                  >
                    Grid View
                  </button>
                </div>
              </div>

              {selectedDay && filteredEvents.length === 0 && (
                <div className="alert alert-warning">
                  {selectedDay < new Date()
                    ? "This date has already passed."
                    : "No events scheduled for this date."}
                </div>
              )}

              <div className={viewMode === "grid" ? "row g-4" : ""}>
                {filteredEvents.map((event) =>
                  viewMode === "grid" ? (
                    <div className="col-md-6" key={event.id}>
                      <div className="event-grid-card">
                        <img src={event.img} alt={event.title} />

                        <div className="p-3">
                          <span className="badge bg-secondary">{event.category}</span>
                          <h5 className="mt-2">{event.title}</h5>
                          <p>{event.description}</p>

                          <p className="event-meta">
                            <FiCalendar /> {event.date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}<br />
                            <FiClock /> {event.time}<br />
                            <FiMapPin /> {event.location}<br />
                            <FiUsers /> {event.attendees} attending
                          </p>

                          <div className="d-flex gap-2 mt-2">
                            <button className="btn btn-danger">Reserve Spot →</button>
                            <button className="btn btn-outline-secondary">Details</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="event-list-item mb-4" key={event.id}>
                      <img src={event.img} alt={event.title} />

                      <div className="event-info">
                        <span className="badge bg-secondary mb-2">{event.category}</span>
                        <h4>{event.title}</h4>
                        <p>{event.description}</p>

                        <p className="event-meta">
                          <FiCalendar /> {event.date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}<br />
                          <FiClock /> {event.time}<br />
                          <FiMapPin /> {event.location}<br />
                          <FiUsers /> {event.attendees} attending
                        </p>

                        <div className="d-flex gap-2">
                          <button className="btn btn-danger">Reserve Spot →</button>
                          <button className="btn btn-outline-secondary">Details</button>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;