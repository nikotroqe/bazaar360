import React, { useState } from "react";
import "./Events.css";

const eventsData = [
  {
    id: 1,
    category: "Festival",
    title: "Albanian Heritage Festival",
    date: "October 25, 2025",
    time: "10:00 AM – 6:00 PM",
    location: "Main Square, Pazari i Ri",
    attendees: 500,
    description:
      "Celebrate Albanian culture with traditional music, dance performances, and artisan demonstrations.",
    img: "https://images.unsplash.com/photo-1580052040395-32c97dcb60de",
  },
  {
    id: 2,
    category: "Workshop",
    title: "Artisan Workshop Series",
    date: "October 28, 2025",
    time: "2:00 PM – 5:00 PM",
    location: "Artisan Corner",
    attendees: 30,
    description:
      "Learn traditional crafts directly from master artisans. Limited spots available.",
    img: "https://images.unsplash.com/photo-1567013770464-15058f5808c7",
  },
  {
    id: 3,
    category: "Food",
    title: "Taste of Tirana Food Fair",
    date: "November 2, 2025",
    time: "12:00 PM – 8:00 PM",
    location: "Central Plaza",
    attendees: 800,
    description:
      "Sample authentic Albanian cuisine from the best vendors at Pazari i Ri.",
    img: "https://images.unsplash.com/photo-1761910932253-e2f8b2bc2f9a",
    extra: true,
  },
];

const Events = () => {
  // === Calendar State ===
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  // === Load More State ===
  const [showExtra, setShowExtra] = useState(false);

  const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));

  const handleDayClick = (day) => {
    setSelectedDay(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = firstDayOfMonth(currentDate);
    const days = daysInMonth(currentDate);
    const prevMonthDays = new Date(year, month, 0).getDate();

    const calendarRows = [];
    let dayCount = 1;

    // First row
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
    calendarRows.push(<tr key="row-0">{firstRow}</tr>);

    let rowIndex = 1;
    while (dayCount <= days) {
      const row = [];
      for (let i = 0; i < 7 && dayCount <= days; i++) {
        row.push(renderDayCell(dayCount++));
      }
      calendarRows.push(<tr key={"row-" + rowIndex}>{row}</tr>);
      rowIndex++;
    }

    return calendarRows;
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
        className={`${isToday ? "today" : ""} ${isSelected ? "active-day" : ""}`}
        onClick={() => handleDayClick(day)}
      >
        {day}
      </td>
    );
  };

  return (
    <div>
      {/* HERO */}
      <header className="events-hero text-white text-center">
        <div className="container">
          <h1 className="fw-bold">Cultural Events & Calendar</h1>
          <p className="lead">
            Stay connected with the vibrant community life at Pazari i Ri. From festivals to workshops, never
            miss a moment.
          </p>
        </div>
      </header>

      {/* MAIN */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* SIDEBAR */}
            <aside className="col-lg-3">
              <div className="sidebar-box mb-4 calendar-box">
                <h6 className="fw-bold mb-3">Select Date</h6>

                <div className="d-flex justify-content-between align-items-center mb-2 calendar-header">
                  <button className="btn btn-sm btn-light" onClick={handlePrevMonth}>
                    &lsaquo;
                  </button>
                  <strong>
                    {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </strong>
                  <button className="btn btn-sm btn-light" onClick={handleNextMonth}>
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
                <ul className="list-unstyled category-list">
                  <li>All Events</li>
                  <li>Festivals</li>
                  <li>Workshops</li>
                  <li>Food Events</li>
                  <li>Markets</li>
                </ul>
              </div>
            </aside>

            {/* EVENTS LIST */}
            <main className="col-lg-9">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold mb-0">Upcoming Events</h3>
                <div>
                  <button className="btn btn-dark btn-sm">List View</button>
                  <button className="btn btn-outline-dark btn-sm">Grid View</button>
                </div>
              </div>

              {eventsData.map((event) => {
                if (event.extra && !showExtra) return null;
                return (
                  <div className="event-list-item mb-4" key={event.id}>
                    <img src={event.img} alt={event.title} />
                    <div className="event-info">
                      <span className="badge bg-secondary mb-2">{event.category}</span>
                      <h4>{event.title}</h4>
                      <p className="text-muted mb-2">
                        📅 {event.date} &nbsp; ⏰ {event.time}
                        <br />
                        📍 {event.location} &nbsp; 👥 {event.attendees} attending
                      </p>
                      <p>{event.description}</p>
                      <div className="d-flex gap-2">
                        <button className="btn btn-danger">Reserve Spot →</button>
                        <button className="btn btn-outline-secondary">Details</button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {eventsData.some((e) => e.extra) && !showExtra && (
                <div className="text-center mt-4">
                  <button className="btn btn-outline-secondary px-4" onClick={() => setShowExtra(true)}>
                    Load More Events
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
